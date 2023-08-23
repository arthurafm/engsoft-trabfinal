'use client'

import CourseCard from '@/components/courses/courseCard';
import { Box, IconButton, Grid, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form';

import { Curso, ListCursosQuery, ListCursosQueryVariables, ModelCursoFilterInput } from '@/API';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

interface IFormSearch{
	searchTerm: string;
}

const customListCurso = /* GraphQL */ `
query ListCursos(
	$filter: ModelCursoFilterInput
	$limit: Int
	$nextToken: String
){
	listCursos(filter: $filter, limit: $limit, nextToken: $nextToken) {
	items {
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
	nextToken
	__typename
	}
}`

async function fetchData(limit: number, term: string | undefined){
	console.log("data fetch dos cursos")
	try{
		const cursoQuery = (await API.graphql({
			query: customListCurso,
			variables: {
				filter: {
					nome: term
				} as ModelCursoFilterInput,
				limit: limit
			} as ListCursosQueryVariables,
			authMode: GRAPHQL_AUTH_MODE.API_KEY
		})) as { data: ListCursosQuery }
		return cursoQuery.data.listCursos?.items as Curso[]
	}catch(error: any){
		console.error(error)
		return undefined 
	}
}


export default function Page(){
	const { register, handleSubmit } = useForm<IFormSearch>() as any

	const [cursos, setCursos] = useState<Curso[]>([])
  
	useEffect(()=>{
		fetchData(8, undefined).then(cur => {
			if(cur){
				setCursos(cur)
			}
		}) 
	},[])

	const onSubmit = async (data: IFormSearch) => {
		console.log(data.searchTerm)
		const res = await fetchData(8, data.searchTerm) 
		if(res){
			setCursos(res)
		}else{
			setCursos([])
		}
	}
	return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '81vh',
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
                Todos os Cursos
            </Typography>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <TextField 
					id="searchTerm"
					label="Pesquisa" 
					placeholder='Pesquise por um curso ou uma tag'
					sx={{ width: '60vw', mb: 4, }}
					{...register("searchTerm")}
                />
				<IconButton type='submit' color='primary'>
					<SearchIcon/>
				</IconButton >
			</form>
            <Grid container 
				justifyContent="space-between"
				alignItems='center'
				sx={{ paddingInline: '10px' }}
				spacing={{xs: 2, md:4}}
				columns={{ xs: 2, sm: 8, md: 12 }}
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
    )
}