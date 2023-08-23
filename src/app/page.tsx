'use client'

import Header from '../components/home/header'
import Carousel from '../components/home/carousel'
import { useState, useEffect } from 'react'
import { Curso, ListCursosQuery, ModelCursoFilterInput } from '@/API'
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

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

async function fetchData(){
	console.log("data fetch dos cursos")
	try{
		const cursoQuery = (await API.graphql({
			query: customListCurso,
			variables: {
				limit: 3
			},
			authMode: GRAPHQL_AUTH_MODE.API_KEY
		})) as { data: ListCursosQuery }
		return cursoQuery.data.listCursos?.items as Curso[]
	}catch(error: any){
		console.error(error)
		return undefined 
	}
}

export default function Home() {
	const [cursos, setCursos] = useState<Curso[]>([])
  
	useEffect(()=>{
		fetchData().then(cur => {
			if(cur){
				setCursos(cur)
			}
		}) 
	},[])
	return (
		<>
			<Header/>
			<Carousel cursos={cursos}/>
		</>
	)
}
