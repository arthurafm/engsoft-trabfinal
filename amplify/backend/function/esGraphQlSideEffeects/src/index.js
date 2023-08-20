/* Amplify Params - DO NOT EDIT
	API_ENGSOFTTRABFINAL_GRAPHQLAPIENDPOINTOUTPUT
	API_ENGSOFTTRABFINAL_GRAPHQLAPIIDOUTPUT
	API_ENGSOFTTRABFINAL_GRAPHQLAPIKEYOUTPUT
	AUTH_ENGSOFTTRABFINAL4BCC482A_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const gql = require('graphql-tag');
const { v4: uuidv4 } = require('uuid');
const AWSAppSyncClient = require('aws-appsync').default;
require('cross-fetch/polyfill');

AWS.config.update({
	region: process.env.REGION,
	credentials: new AWS.Credentials(
		process.env.AWS_ACCESS_KEY_ID,
		process.env.AWS_SECRET_ACCESS_KEY,
		process.env.AWS_SESSION_TOKEN
	),
})
const credentials = AWS.config.credentials

const appsyncClient = new AWSAppSyncClient({
	url: process.env.API_ENGSOFTTRABFINAL_GRAPHQLAPIENDPOINTOUTPUT,
	region: process.env.REGION,
	auth: {
		type: 'AWS_IAM',
		credentials: credentials,
	},
	disableOffline: true,
});
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

async function comprarCursoResolver(event){
	const { cursoId } = event.arguments;
	
	const userTableId = event.identity.claims['custom:tableId']
	const ownerAluno = `${event.identity.sub}::${event.identity.username}`
	if(!userTableId){
		throw new Error("User does not have TableId as a custom atribute")
	}
	const gqlQueryAluno = gql`query GetAluno($id: ID!) {
		getAluno(id: $id) {
			nome
			creditos
			cursa {
				items {
					cursoAlunosId
				}
			}
		}
	}`;
	const dataAlunoReq = await appsyncClient.query({
		query: gqlQueryAluno,
		fetchPolicy: 'no-cache',
		variables: {
			id: userTableId
		}
	})
	if(dataAlunoReq.data == null){
		throw new Error("o requester desse dado não é um Aluno")
	}
	const dataAluno = dataAlunoReq.data.getAluno
	if(dataAluno.cursa.items.map(e => e.cursoAlunosId).includes(cursoId)){
		throw new Error("Aluno já possui esse curso")
	}
	const gqlQueryCurso = gql`query GetCurso($id: ID!) {
		getCurso(id: $id) {
			id
			nome
			preco
			descricao
			professor {
				nome
			}
			modulos {
				items {
					titulo
					descricao
					videoLink
					owner
					id
					createdAt
					updatedAt
					cursoModulosId
					__typename
				}
				nextToken
				__typename
			}
			rating
			cursoGrupo
		}
	}`
	const dataCursoReq = await appsyncClient.query({
		query: gqlQueryCurso,
		fetchPolicy: 'no-cache',
		variables: {
			id: cursoId
		}
	})
	if(dataCursoReq.data == null){
		throw new Error(`Curso de id: ${cursoId} não existe`)
	}
	const dataCurso = dataCursoReq.data.getCurso

	if(dataAluno.creditos < dataCurso.preco){
		throw new Error("Creditos insuficientes para a compra desse curso")
	}
	
	//criar a tabela AlunoCurso
	const gqlCreateAlunoCurso = gql`mutation CreateAlunoCurso(
		$input: CreateAlunoCursoInput!
		$condition: ModelAlunoCursoConditionInput
	) {
		createAlunoCurso(input: $input, condition: $condition) {
			monitoria
			owner
			alunoCursaId
			cursoAlunosId
		}
	}`;
	const dataAlunoCursoReq = await appsyncClient.mutate({
		mutation: gqlCreateAlunoCurso,
		fetchPolicy: 'no-cache',
		variables: {input: {
			monitoria: false,
			owner: ownerAluno,
			alunoCursaId: userTableId,
			cursoAlunosId: dataCurso.id,
		}}
	})
	
	//adicionar o aluno ao grupo curso
	const addUserParams = {
		GroupName: dataCurso.cursoGrupo,
		UserPoolId: process.env.AUTH_ENGSOFTTRABFINAL4BCC482A_USERPOOLID,
		Username: event.identity.username,
	}
	try{
		await cognitoIdentityServiceProvider.adminAddUserToGroup(addUserParams).promise();
	}catch(error){
		throw new Error("Failed to Add user to Group\n" + error)
	}

	//atualizar os creditos do aluno
	const gqlUpdateAluno = gql`mutation UpdateAluno(
		$input: UpdateAlunoInput!
		$condition: ModelAlunoConditionInput
	) {
		updateAluno(input: $input, condition: $condition) {
			id
			creditos
			owner
		}
	}`;
	//TODO: this update call is incorrect
	const updatedAlunoReq = await appsyncClient.mutate({
		mutation: gqlUpdateAluno,
		fetchPolicy: 'no-cache',
		variables: {input: {
			id: userTableId, 
			creditos: (dataAluno.creditos - dataCurso.preco)
		}}
	})

	if(updatedAlunoReq.errors){
		throw new Error("Failed to update user balance")
	}

	return dataCurso
}

//TODO: fazer try catch nas operações, pois caso falhem deve-se remover o grupo criado
async function criarCursoResolver(event){
	const {nome, preco, descricao } = event.arguments;

	const professorOwner = `${event.identity.sub}::${event.identity.username}`
	const professorTableId = event.identity.claims['custom:tableId'];

	const gqlQueryProfessors = gql`query GetProfessor($id: ID!) {
		getProfessor(id: $id) {
			id
		}
	}`;

	const dataProfessorReq = await appsyncClient.query({
		query: gqlQueryProfessors,
		fetchPolicy: 'no-cache',
		variables: {
			id: professorTableId
		}
	})
	if(!dataProfessorReq.data){
		throw new Error(`There is no Professor with id: ${professorTableId}`)
	}
	const dataProfessor = dataProfessorReq.data.getProfessor

	const GroupName = 'GROUP' + uuidv4();
	const UserPoolId = process.env.AUTH_ENGSOFTTRABFINAL4BCC482A_USERPOOLID
	try{
		await cognitoIdentityServiceProvider.createGroup({ GroupName, UserPoolId }).promise()
	}catch(error){
		throw new Error(`Failed to create a new cognito group with name: ${GroupName}\n` + error)
	}

	const gqlCreateCurso = gql`mutation CreateCurso(
		$input: CreateCursoInput!
		$condition: ModelCursoConditionInput
	) {
		createCurso(input: $input, condition: $condition) {
			id
			nome
			preco
			descricao
			professor {
				id
				nome
				descricao
				email
				cpf
				leciona {
					nextToken
					__typename
				}
				owner
				createdAt
				updatedAt
				__typename
			}
			modulos {
				items {
					id
					titulo
					descricao
					videoLink
					owner
					createdAt
					updatedAt
					cursoModulosId
					__typename
				}
				nextToken
				__typename
			}
			rating
			alunos {
				items {
					id
					monitoria
					horarios
					rating
					owner
					createdAt
					updatedAt
					alunoCursaId
					cursoAlunosId
					__typename
				}
				nextToken
				__typename
			}
			cursoGrupo
			owner
			createdAt
			updatedAt
			professorLecionaId
			__typename
		}
	}`;

	const dataCurso = await appsyncClient.mutate({
		mutation: gqlCreateCurso,
		fetchPolicy: 'no-cache',
		variables: {input: {
			nome: nome,
			preco: preco,
			descricao: descricao,
			cursoGrupo: GroupName,
			owner: professorOwner,
			professorLecionaId: dataProfessor.id,
		}}
	})
	return dataCurso
}

const resolvers = {
	Query : {
		echo: async (event) => JSON.stringify(event)
	},
	Mutation: {
		comprarCurso: async (event) => await comprarCursoResolver(event),
		//adiconarAlunoComoMonitor: async (event) => await adiconarAlunoComoMonitorResolver(event),
		criarCurso: async (event) => await criarCursoResolver(event),
	}
}

/**
 * @type {import('@types/aws-lambda').AppSyncResolverHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
	const typeHandler = resolvers[event.typeName];
	if (typeHandler) {
		const resolver = typeHandler[event.fieldName];
		if (resolver) {
			return await resolver(event);
		}
	}
	throw new Error(`Resolver ${event.fieldName} of type ${event.typeName} not found.`, null);
};

