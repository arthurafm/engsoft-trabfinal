import {
	createContext,
	Dispatch,
	ReactElement,
	SetStateAction,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

import { 
	Aluno, GetAlunoQuery, GetAlunoQueryVariables,
	Professor, GetProfessorQuery, GetProfessorQueryVariables
} from "@/API";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { getAluno, getProfessor } from "@/graphql/queries";


interface UserDataContextType {
	cognitoUser: CognitoUser | null;
	userData: Aluno | Professor | null;
	setCognitoUser: Dispatch<SetStateAction<CognitoUser | null>>;
	setUserData: Dispatch<SetStateAction<Aluno | Professor | null>>;
	reFetchUser: () => Promise<void>;
	signOutUser: () => Promise<void>;
}

const UserDataContext = createContext<UserDataContextType>({} as UserDataContextType);

interface Props {
	children: React.ReactNode;
}

export default function UserContext({ children }: Props): ReactElement {
	const [cognitoUser, setCognitoUser] = useState<CognitoUser | null>(null);
	const [userData, setUserData] = useState<Aluno | Professor | null>(null)
	const fetchUserData = useCallback(async () =>{
		if(!cognitoUser){
			throw new Error("no current user is logged in")
		}
		const userTableId = (cognitoUser as any).attributes['custom:tableId']
		const userIsProfessor = (cognitoUser as any).attributes['custom:isProfessor'] == 't'
		try {
			if(userIsProfessor){
				const professorQuery = (await API.graphql({
					query: getProfessor,
					variables: { id: userTableId } as GetProfessorQueryVariables,
					authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
				})) as { data: GetProfessorQuery } 
				setUserData(professorQuery.data.getProfessor as Professor)
			}else{
				const alunoQuery = (await API.graphql({
					query: getAluno,
					variables: { id: userTableId} as GetAlunoQueryVariables,
					authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
				})) as { data: GetAlunoQuery } 
				setUserData(alunoQuery.data.getAluno as Aluno)
			}
		} catch (error) {
			// Failed to fecth user data.
			console.error(error);
			setUserData(null);
		}
	},[cognitoUser, setUserData])
	useEffect(() => {
		checkUser();
	}, []);
  
	useEffect(() => {
		Hub.listen("auth", () => {
			console.log("Auth Event")
			// perform some action to update state whenever an auth event is detected.
			checkUser()
		});
	}, []);
	//happends
	useEffect(()=> {
		if(!cognitoUser)return
		if((cognitoUser as any).attributes['custom:tableId']){
			console.log("fecthing user data")
			fetchUserData()
		}else{
			console.error("User has no atribute 'custom:tableID'")
		}
	}, [cognitoUser, fetchUserData])
  
	async function checkUser() {
		try {
			const amplifyUser = await Auth.currentAuthenticatedUser();
			console.log(amplifyUser.attributes)
			const userTableId = amplifyUser.attributes['custom:tableId']
			setCognitoUser(amplifyUser)
		} catch (error) {
			// No current signed in user.
			console.error("No signed in user: ", error);
			setCognitoUser(null);
		}
	}
	async function reFetchUser(){
		try{
			const cognitoTokens = await Auth.currentSession()
			const refreshTokens = cognitoTokens.getRefreshToken()
			cognitoUser?.refreshSession(refreshTokens,(err, data) =>{
				console.log(err, data)
			})
		}catch(error){
			console.error(error)
		}
	}

	async function signOutUser(){
		try{
			await Auth.signOut()
			setUserData(null)
		}catch(error){
			console.error(error)
		}
	}
	return (
		<UserDataContext.Provider value={{ 
			cognitoUser,
			userData,
			setCognitoUser,
			setUserData,
			reFetchUser,
			signOutUser
		}}>
			{children}
		</UserDataContext.Provider>
	);
}

export const useUser = (): UserDataContextType => useContext(UserDataContext);