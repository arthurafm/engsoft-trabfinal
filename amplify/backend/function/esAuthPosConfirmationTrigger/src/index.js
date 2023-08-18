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
const AWSAppSyncClient = require('aws-appsync').default;
require('cross-fetch/polyfill');

console.log(`I'm on region: ${process.env.REGION}`)

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

async function insertUserInTable(gqlMutation, gqlMutationName, variables, username){
	const dataUser = await appsyncClient.mutate({
		mutation: gqlMutation,
		fetchPolicy: 'no-cache',
		variables: {input: variables}
	})
	if(dataUser.errors){
		throw new Error("Failed to mutate: " + JSON.stringify(errors))
	}
	try{
		const addIdParams = {
			UserAttributes : [
				{
					Name: 'custom:tableId',
					Value: dataUser.data[gqlMutationName].id
				}
			],
			UserPoolId: process.env.AUTH_ENGSOFTTRABFINAL4BCC482A_USERPOOLID,
			Username: username,
		}
		await cognitoIdentityServiceProvider.adminUpdateUserAttributes(addIdParams).promise()
	}catch(error){
		throw new Error(`Failed to add the table id to the user ${username} custom atributes` + error + '\n' + JSON.stringify(dataUser))
	}
}

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
	const sub = event.request.userAttributes.sub
	if(!sub){
		throw new Error("Invalid request in Post Confirmation Trigger")
	}
	const isProfessorAtrib = event.request.userAttributes['custom:isProfessor']
	if(!isProfessorAtrib){
		throw new Error("Request made without value for isProfessor custom atribute")
	}
	if(isProfessorAtrib == 't'){
		const gqlCreateProfessor = gql`mutation CreateProfessor(
			$input: CreateProfessorInput!
			$condition: ModelProfessorConditionInput
		){
			createProfessor(input: $input, condition: $condition) {
				id
			}
		}`; 
		const variables = {
			nome: event.request.userAttributes['custom:nome'],
			email: event.request.userAttributes.email,
			cpf: event.request.userAttributes['custom:cpf'],
			owner: `${sub}::${event.userName}`,
		}
		try{
			await insertUserInTable(gqlCreateProfessor, 'createProfessor', variables, event.userName)
		}catch(error){
			throw new Error("invalid request of:\n"+ JSON.stringify(event.request) + '\nError is:\n' + error)
		}
	}else if(isProfessorAtrib == 'f'){
		const gqlCreateAluno = gql`mutation CreateAluno(
			$input: CreateAlunoInput!
			$condition: ModelAlunoConditionInput
		) {
			createAluno(input: $input, condition: $condition) {
				id
			}
		}`;
		const variables = {
			nome: event.request.userAttributes['custom:nome'],
			email: event.request.userAttributes.email,
			cpf: event.request.userAttributes['custom:cpf'],
			creditos: 0,
			owner: `${sub}::${event.userName}`,
		}
		try{
			await insertUserInTable(gqlCreateAluno, 'createAluno', variables, event.userName)
		}catch(error){
			throw new Error("invalid request of:\n"+ JSON.stringify(event.request) + '\nError is:\n' + error)
		}
	}else{
		throw new Error("The value for custom attribute isProfessor must be 't' or 'f'")
	}
	return event
};

