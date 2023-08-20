'use client'
import { Button, Typography, Box, Stack, CardMedia } from "@mui/material"
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { Curso, GetCursoQueryVariables, GetCursoQuery, Aluno, Modulo } from "@/API";
import { getCurso } from "@/graphql/queries";
import { use } from "react";
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
  }
` 

async function getCourseData(id: string, query: string, authMode: any) {
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

interface Props {
	params: {courseId: string}
}

export default function Page({ params }: Props ){
	const { cognitoUser, userData } = useUser()
	
	let courseData = {} as Curso | undefined
	let alunoCursa: boolean | undefined = false
	if( cognitoUser && userData?.__typename == "Aluno"){
		alunoCursa = (userData as Aluno).cursa?.items
			.map(v => v?.cursoAlunosId)
			.includes(params.courseId)
		if(alunoCursa){
			courseData = use(getCourseData(params.courseId, getCurso, GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS))
			console.log(courseData)
		}
	}else{
		courseData = use(getCourseData(params.courseId, customGetCurso, GRAPHQL_AUTH_MODE.API_KEY))
		console.log(courseData)
	}
	if(!courseData){
		return <div>CRINGE</div>
	}
	// Alterar para valores específicos do curso/professor
	const courseName = courseData.nome
	const courseRating = courseData.rating
	const coursePrice = courseData.preco
	const courseIcon = '/gremio.png'
	const courseDescription = courseData.descricao
	const professorIcon = '/gremio.png'
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
			<Box
				sx={{
				display: 'flex',
				flexDirection: 'row',
				}}>
				{ratingToStars(courseRating)}
			</Box>
			</Box>
			{!alunoCursa && <Box sx={{
			m: 'auto 0 auto auto',
			pb: '2%',
			}}>
			<Button
				key="buy"
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
				mr: '10vw',
				alignItems: 'space-between',
				pl: '4vh',
			}}>
			<Image src={professorIcon} alt='Ícone do professor' width={120} height={120} style={{ width: '12vh', height: '12vh' }} />
			<Typography
				sx={{
				fontFamily: 'Roboto',
				fontWeight: 400,
				textAlign: 'justify',
				fontSize: '1.2rem',
				}}>
					{professorNome}
				{professorDescription}
			</Typography>
			</Box>
			<Box>
			<Typography
				sx={{
				fontFamily: 'Roboto',
				fontWeight: 400,
				textAlign: 'justify',
				fontSize: '1.2rem',
				}}
				paragraph>
				{courseDescription}
			</Typography>
			</Box>
		</Box>
		{ alunoCursa && courseData.modulos?.items.map((val, i) =>{
			return <Stack key={i}>
				<Typography key={i} variant="h4">{val?.titulo}</Typography>
				<Typography key={i} variant="subtitle1">{val?.descricao}</Typography>
				{val?.videoLink && <iframe key={i} width="420" height="315" src={val?.videoLink}></iframe>}
			</Stack>
		})}
		</Box>
	)
}