'use client'

import OverlayLogin from "@/components/overlayLogin";

import { useUser } from "@/context/UserContext";
import { Typography } from "@mui/material";


export default function App() {
	const { userData } = useUser()
	return (<>
		<OverlayLogin/>
		<Typography>Bem vindo {userData?.__typename}: {userData?.nome}</Typography>
	</>
  );
}