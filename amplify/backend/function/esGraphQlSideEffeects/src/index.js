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
	
	const ownerAluno = `${event.identity.sub}::${event.identity.username}`
	const gqlQueryAlunoByOwner = gql`
	query AlunosByOwner(
		$owner: String!
		$sortDirection: ModelSortDirection
		$filter: ModelAlunoFilterInput
		$limit: Int
		$nextToken: String
	){
		alunosByOwner(
			owner: $owner
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		){
			items {
				id
				nome
				creditos
				cursa {
					items {
						cursoAlunosId
					}
				}
			}
		}
	}`;

	const dataAlunoReq = await appsyncClient.query({
		query: gqlQueryAlunoByOwner,
		fetchPolicy: 'no-cache',
		variables: {
			owner: ownerAluno
		}
	})
	const itemDataAluno = dataAlunoReq.data.alunosByOwner
	if(!itemDataAluno){
		throw new Error("Erro em acessar a tabela do aluno " + ownerAluno)
	}
	if(itemDataAluno.items.length == 0){
		throw new Error("O requester não possui uma coluna na tabela alunos")
	}
	if(itemDataAluno.items.length > 1){
		throw new Error("O requester possui mais de uma coluna na tabela alunos")
	}
	const dataAluno = itemDataAluno.items[0]
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
			alunoCursaId: dataAluno.id,
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
			id: dataAluno.id, 
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

	const gqlQueryProfessorsByOwner = gql`
	query ProfessorsByOwner($owner: String!){
		professorsByOwner(owner: $owner) {
			items {
				id
			}
		}
	}`;
	const dataProfessorReq = await appsyncClient.query({
		query: gqlQueryProfessorsByOwner,
		fetchPolicy: 'no-cache',
		variables: {
			owner: professorOwner	
		}
	})
	const queriedProfessorData = dataProfessorReq.data.professorsByOwner
	if(!queriedProfessorData || !queriedProfessorData.items){
		throw new Error(`No data was retrived from owner: ${professorOwner}\n${dataProfessorReq}`)
	}
	if(queriedProfessorData.items.length == 0){
		throw new Error(`There is no Professor with the owner: ${professorOwner}`)
	}
	if(queriedProfessorData.items.length > 1){
		throw new Error(`The Professor has multiple table rows: ${professorOwner}`)
	}
	const dataProfessor = queriedProfessorData.items[0]
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
				nome
			}
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
	return dataCurso.data.createCurso
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

