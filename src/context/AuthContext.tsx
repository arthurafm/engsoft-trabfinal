import {
	createContext,
	Dispatch,
	ReactElement,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

interface UserContextType {
	user: CognitoUser | null;
	setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface UserData{
	nome: string;
	email: string;
	ownerField: string;
	tableId: string;
	creditos: number;
	cursos: Array<{
		cursoId: string; 
		nome: string; 
	}>;
}

interface Props {
	children: React.ReactNode;
}

export default function AuthContext({ children }: Props): ReactElement {
	const [user, setUser] = useState<CognitoUser | null>(null);
  
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
  
	async function checkUser() {
		try {
			const amplifyUser = await Auth.currentAuthenticatedUser();
			//const sub = amplifyUser.attributes.sub
			//const username = amplifyUser.username
			//console.log(`${sub}::${username}`)
			setUser(amplifyUser)
			console.log(amplifyUser.attributes)
			const userTableId = amplifyUser.attributes['custom:tableId']
			if(!userTableId){
				//throw new Error("Invalid user, tableId atribute not found")
			}
			//TODO: query for user and save its info in the hook
		} catch (error) {
			// No current signed in user.
			console.error("No signed in user: ", error);
			setUser(null);
		}
	}

	async function fetchUser() {
		try {
			const amplifyUser = await Auth.currentAuthenticatedUser();
			setUser(amplifyUser);
		} catch (error) {
			// No current signed in user.
			console.error(error);
			setUser(null);
		}
	}
  
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export const useUser = (): UserContextType => useContext(UserContext);