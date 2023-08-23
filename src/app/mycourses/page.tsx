'use client'

import CourseCard from '@/components/courses/courseCard';
import { Box, Grid, Typography} from '@mui/material';
import React, { use, useEffect, useState } from 'react'

import { useUser } from '@/context/UserContext';

import { Curso, GetAlunoQuery, GetProfessorQuery} from '@/API';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

const customGetCursosAluno = /* GraphQL */`
query GetAluno($id: ID!) {
    getAluno(id: $id) {
		cursa {
			items {
				curso {
					id
					nome
					preco
					descricao
				professor {
					nome
				}
				rating
				}
			}
		nextToken
		}
	}
}`

const customGetCursosProfessor = /* GraphQL */`
query GetProfessor($id: ID!) {
    getProfessor(id: $id) {
		leciona {
			items {
				id
				nome
				preco
				descricao
				professor {
					nome
				}
				rating
			}
			nextToken
		}
	}
}`


async function fetchDataAluno(userId: string){
	console.log("data fetch dos meus cursos - sou aluno")
	try{
		const cursoQuery = (await API.graphql({
			query: customGetCursosAluno,
			variables: { id: userId },
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
		})) as { data: GetAlunoQuery }
		return (cursoQuery.data.getAluno?.cursa?.items as any)
			.map((v:any) => v.curso) as Curso[] 
	}catch(error: any){
		console.error(error)
		return undefined 
	}
}

async function fetchDataProfessor(userId: string){
	console.log("data fetch dos meus cursos - sou professor")
	try{
		const cursoQuery = (await API.graphql({
			query: customGetCursosProfessor,
			variables: { id: userId },
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
		})) as { data: GetProfessorQuery }
		return (cursoQuery.data.getProfessor?.leciona?.items as Curso[])
	}catch(error: any){
		console.error(error)
		return undefined 
	}
}


export default function Page(){
	const { cognitoUser, userData } = useUser();

	const [cursos, setCursos] = useState<Curso[]>([])
	useEffect(()=>{
		if(cognitoUser && userData?.__typename == "Aluno"){
			fetchDataAluno(userData.id).then(val =>{
				if(val){
					setCursos(val)
				}
			})
		}else if(cognitoUser && userData?.__typename == "Professor"){
			fetchDataProfessor(userData.id).then(val =>{
				if(val){
					setCursos(val)
				}
			})
		}
	},[])
	return cognitoUser? 
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minHeight: '82vh',
				}}>
				<Typography
					sx={{
						fontFamily: 'Roboto',
						fontWeight: 800,
						fontSize: '4vw',
						color: '#C73700',
						mt: 3,
						pb: 3,
					}}
				>
					Meus Cursos
				</Typography>
				<Grid container 
					justifyContent="space-between"
					alignItems='center'
					sx={{ paddingInline: '10px' }}
					spacing={{xs: 2, md:4}}
					columns={{ xs: 2, sm: 8, md: 12 }}
					mb={5}
				>
					{cursos.map((curso, i) => {
						return <Grid item key={i} xs={2} sm={4} md={4}>
							<CourseCard
								key={i}
								img={'/course-placeholder.png'}
								courseName={curso.nome}
								courseDescription={curso.descricao}
								coursePath={curso.id}/>
						</Grid>
					})}
				</Grid>
			</Box>
			:
			<Box
				sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '82vh',
				backgroundColor: "#FFE199",
				}}>
				<Typography
					variant="h3"
					sx= {{
					color: '#C73700',
					fontFamily: 'Roboto',
					fontWeight: 700,
					}}>Logue-se para acessar a sua página de Cursos</Typography>
			</Box>
}