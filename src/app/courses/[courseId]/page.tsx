'use client'
import { Button, Typography, Box, Stack, CardMedia, Divider } from "@mui/material"
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import ModuleCard from "@/components/courses/moduleCards";
import TutorSchedule from "@/components/courses/tutorSchedule";

import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { Curso, GetCursoQueryVariables, GetCursoQuery, Aluno, Modulo, Professor, ComprarCursoMutationVariables, AlunoCurso, AdiconarAlunoComoMonitorMutation, AdiconarAlunoComoMonitorMutationVariables } from "@/API";
import { use, useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

const customGetCurso = /* GraphQL */ `
query GetCurso($id: ID!) {
	getCurso(id: $id) {
		id
		nome
		preco
		descricao
		professor {
			nome
			descricao
		}
		rating
	}
} ` 

const customGetCursoAuthorized = /* GraphQL */ `
query GetCurso($id: ID!) {
	getCurso(id: $id) {
		id
		nome
		preco
		descricao
		professor {
			nome
			descricao
		}
		modulos {
			items {
				id
				titulo
				descricao
				videoLink
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
				videoLink
				alunoCursaId
				aluno {
					id
					nome
				}
			}
			nextToken
			__typename
		}
		cursoGrupo
	}
}`;

const customAdicionarAlunoComoMonitorMutaion = /* GraphQL */ `
mutation AdiconarAlunoComoMonitor(
	$alunoId: ID!
	$cursoId: ID!
	$horarios: String!
	$videoLink: String
){
	adiconarAlunoComoMonitor(
		alunoId: $alunoId
		cursoId: $cursoId
		horarios: $horarios
		videoLink: $videoLink
	){
		id
		aluno {
			id
			nome
		}
		monitoria
		horarios
		videoLink
		alunoCursaId
		cursoAlunosId
	}
}`;


const customComprarCurso = /* GraphQL */`
mutation ComprarCurso($cursoId: ID!) {
	comprarCurso(cursoId: $cursoId) {
		id
	}
}`


async function getCourseData(id: string, query: string, authMode: any) {
	console.log("queried data")
	try{
		const cursoQuery = (await API.graphql({
			query: query,
			variables: { id: id } as GetCursoQueryVariables,
			authMode: authMode
		})) as { data: GetCursoQuery } 
		return cursoQuery.data.getCurso as Curso
	}catch(error: any){
		console.error(error)
		return undefined 
	}
}

interface IFormAddMonitor{
	aluno: string;
	disponibilidade: string;
	link: string;
}

interface Props {
	params: {courseId: string}
}

export default function Page({ params }: Props ){
	const { cognitoUser, userData, reFetchUser } = useUser()
	
	const [courseData, setCourseData] = useState<Curso | undefined>()
	const [alunoCursa, setAlunoCursa] = useState<boolean | undefined>(false)
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

	const [professorLeciona, setProfessorLeciona] = useState<boolean | undefined>(false)

	useEffect(()=>{
		if( cognitoUser && userData?.__typename == "Aluno"){
			const cursa = (userData as Aluno).cursa?.items.map(v => v?.cursoAlunosId).includes(params.courseId)
			setAlunoCursa(cursa)
			if(cursa){
				getCourseData(params.courseId,
					customGetCursoAuthorized,
					GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
				).then(cur => setCourseData(cur))
			}else{
				getCourseData(params.courseId,
					customGetCurso,
					GRAPHQL_AUTH_MODE.API_KEY
				).then(cur => setCourseData(cur))
			}
		}else if( cognitoUser && userData?.__typename == "Professor"){
			const leciona = (userData as Professor).leciona?.items.map(v => v?.id).includes(params.courseId)
			setProfessorLeciona(leciona)
			if(leciona){
				getCourseData(params.courseId,
					customGetCursoAuthorized,
					GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
				).then(cur => setCourseData(cur))
			}else{
				getCourseData(params.courseId,
					customGetCurso,
					GRAPHQL_AUTH_MODE.API_KEY
				).then(cur => setCourseData(cur))
			}
		}else{
			getCourseData(params.courseId,
				customGetCurso,
				GRAPHQL_AUTH_MODE.API_KEY
			).then(cur => setCourseData(cur))
		}
	},[userData])

	const comprarCurso = async () => {
		setIsButtonDisabled(true)
		const input: ComprarCursoMutationVariables = {
			cursoId: params.courseId
		}
		try{
			const compra = await API.graphql({
				query: customComprarCurso,
				variables: input,
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
			})
			await reFetchUser()
		}catch (error) {
			alert(`Erro na compra:\n${error}`)
			setIsButtonDisabled(false)
			console.error(error)
		}
	}

	const addAsMonitor = async ({ aluno, disponibilidade, link }: IFormAddMonitor) => {
		const courseId = courseData?.id
		if(!courseId){
			console.log("Failed to get the course id")
		}
		const [alunoNome, alunoId] = aluno.split('\t#')
		const input: AdiconarAlunoComoMonitorMutationVariables = {
			alunoId: alunoId,
			cursoId: courseId as string,
			horarios: disponibilidade,
			videoLink: link
		}
		try{
			const addAlunoAsMonitorMutation = await API.graphql({
				query: customAdicionarAlunoComoMonitorMutaion,
				variables: input,
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
			}) as { data: AdiconarAlunoComoMonitorMutation }
			return addAlunoAsMonitorMutation.data.adiconarAlunoComoMonitor as AlunoCurso
		}catch (error) {
			alert(`Erro em adicionar o aluno como monitor:\n${error}`)
			return undefined
		}
	}

	if(!courseData){
		return <div style={{ minHeight: '82vh', backgroundColor: '#FFE199', color: '#C63700', alignItems: 'center', justifyContent: 'center', display: 'flex', fontFamily: 'Roboto', fontSize: 80, fontWeight: 700}}>CRINGE</div>
	}
	// Alterar para valores específicos do curso/professor
	const courseName = courseData.nome
	const courseRating = courseData.rating
	const coursePrice = courseData.preco
	const courseIcon = '/placeholders/course-icon-placeholder.png'
	const courseDescription = courseData.descricao
	const professorIcon = '/placeholders/icon-placeholder.png'
	const professorNome = courseData.professor?.nome
	const professorDescription = courseData.professor?.descricao

	const ratingToStars = (rating: number | null | undefined) => {
		return Array(5).fill(1).map((v, i) => {
			const star = rating ? rating : 0 - i
			if (star >= 1) { return ( <StarIcon key={i} sx={{ width: '4vh', height: '4vh'}} />) }
			else if (star > 0) { return ( <StarHalfIcon key={i} sx={{ width: '4vh', height: '4vh'}} />) }
			else { return ( <StarBorderIcon key={i} sx={{ width: '4vh', height: '4vh'}} />) }
		}) 
	}
	return (
		<>
		<head>
			<title>{`Guide Me - ${courseName}`}</title>
		</head>
		<Box sx = {{
			minHeight: '100vh',
			minWidth: '100vw',
			margin: 0,
			background: 'linear-gradient(to bottom, #FFE199 0 40vh, white 40vh 100vh)'
		}}>
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			width: '80%',
			pl: '10%',
			pt: '28.2vh'
		}}>
			<Image src={courseIcon} alt='Ícone do curso' width={200} height={200} style={{ width: '20vh', height: '20vh' }} />
			<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				pl: '2.5vw',
				m: 'auto 0',
			}}>
				<Typography
					variant="h6"
					noWrap
					component="h6"
					sx = {{
					fontFamily: 'Roboto',
					fontWeight: 700,
					fontSize: '2.5rem',
					padding: 0,
					}}>
					{courseName}
				</Typography>
				<Box sx={{height: '4vh',}}/>
			</Box>
			{(!alunoCursa && !professorLeciona)&& <Box sx={{
			m: 'auto 0 auto auto',
			pb: '2%',
			}}>
			<Button
				key="buy"
				disabled={isButtonDisabled}
				onClick={comprarCurso}
				sx={{ color: 'white',
					fontSize: '1.2rem',
					background: '#E35725',
					borderRadius: '1rem',
					textTransform: 'none',
					border: 1,
					borderColor: 'transparent',
					fontWeight: 600,
					width: '6rem',
					height: '3rem',
					'&:hover': {
						backgroundColor: 'white',
						color: '#E35725',
						borderColor: '#FF7222',
					},}}>
				{coursePrice} GP
				</Button>
			</Box>}
		</Box>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				width: '80%',
				margin: 'auto',
			}}>
			<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'top',
				alignItems: 'center',
				ml: 0,
				minWidth: '20vh',
				maxWidth: '20vh',
			}}>
				<Image src={professorIcon} alt='Ícone do professor' width={120} height={120} style={{ width: '12vh', height: '12vh' }} />
				<Typography
					sx={{
					fontFamily: 'Roboto',
					fontWeight: 400,
					fontSize: '1.2rem',
					textAlign: 'center',
					}}>
						{professorNome}
				</Typography>
			</Box>
			<Box>
			<Typography
				sx={{
				fontFamily: 'Roboto',
				fontWeight: 400,
				textAlign: 'justify',
				fontSize: '1.2rem',
				ml: '8vw',
				}}
				paragraph>
				{courseDescription}
			</Typography>
			</Box>
		</Box>
		{(alunoCursa || professorLeciona) &&
			<TutorSchedule 
				isProfessor={professorLeciona} 
				alunos={courseData.alunos?.items ? 
					courseData.alunos?.items.filter(a => a?.monitoria != undefined ? !a.monitoria : false) as AlunoCurso[] : []
				}
				monitores={courseData.alunos?.items ? 
					courseData.alunos?.items.filter(i => i?.monitoria) as AlunoCurso[] : []
				}
				addAsMonitor={addAsMonitor}
			/>
		}
		{((alunoCursa || professorLeciona) && courseData.modulos?.items.length != 0) &&
			<>
				<Typography
					variant='h3'
					sx={{
						fontFamily: 'Roboto',
						fontWeight: 700,
						textAlign: 'center',
						color: '#C73700',
						pb: 3,
					}}
				>
					Módulos
				</Typography>
				<Divider />
				<Stack alignItems='center' spacing={4} sx={{mb: 10, mt: 3}}>
					{alunoCursa && courseData.modulos?.items.map((val, i) =>{
						return <ModuleCard 
							key={i}
							title={val?.titulo}
							description={val?.descricao}
							videoLink={val?.videoLink == "" ? undefined : val?.videoLink}
						/>
					})}
				</Stack>
			</>
		}
		</Box>
		</>
	)
}