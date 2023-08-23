'use client'

import { useUser } from '@/context/UserContext';
import { Stack, TextField, Button, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'

import { echo } from '@/graphql/queries';

import { CreateModuloInput, CriarCursoMutation, CriarCursoMutationVariables, Curso } from '@/API';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

interface IFormCriarCurso{
	titulo: string;
	descricao: string;
	preco: string;
	[key: string]: string | number | undefined 
}

const customCriarCurso = /* GraphQL */ `
mutation CriarCurso($nome: String!, $preco: Float!, $descricao: String!) {
	criarCurso(nome: $nome, preco: $preco, descricao: $descricao) {
		id
	}
}`;

const customCreateModulo = /* GraphQL */ `
mutation CreateModulo(
	$input: CreateModuloInput!
	$condition: ModelModuloConditionInput
){
    createModulo(input: $input, condition: $condition) {
		id
	}
}`;


export default function Page(){
	const { cognitoUser, userData } = useUser()
	if(!cognitoUser || userData?.__typename != "Professor"){
		return <div>Ops, você não é professor</div>
	}
	const { register, handleSubmit, formState: { errors } } = useForm<IFormCriarCurso>() as any;
	const router = useRouter()
	const [modulos, setModulos] = useState<number[]>([])
	const [moduloId, setModuloId] = useState(1)

	useEffect(()=>{
		console.log(modulos)
	},[modulos])

	const addModulo = () => {
		setModulos([...modulos, moduloId])
		setModuloId(moduloId + 1)
	}

	const removeModulo = (id: number) => {
		console.log('del id ' + id)
		setModulos(modulos.filter(i => i != id))
	}

	const onSubmit = async (data: IFormCriarCurso) =>{
		console.log(data)

		for(const id of modulos){
			if(!data[`titulo-${id}`] || !data[`descricao-${id}`] || !data[`videolink-${id}`]){
				console.log("Input nula da entrada " + id)
				return
			}
		}
		let cursoId = undefined
		/*
		const qEcho = await API.graphql({
			query: echo,
			variables: {msg: "hello"},
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
		})
		console.log(qEcho)
		*/
		try{
			const vars: CriarCursoMutationVariables = {
				nome: data['titulo'],
				preco: Number(data['preco']),
				descricao: data['descricao']
			}
			console.log(vars)
			const criarCurso = (await API.graphql({
				query: customCriarCurso,
				variables: vars,
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
			})) as { data: CriarCursoMutation } 
			cursoId = criarCurso.data.criarCurso.id
			if(!cursoId){
				throw new Error("Criação de curso resultou em nenhum id")
			}
		}catch(error: any){
			console.error(error)
			return
		}
		let modulePromisses = []
		for(const id of modulos){
			const vars: CreateModuloInput = {
				cursoModulosId: cursoId,
				titulo: data[`titulo-${id}`] as string,
				descricao: data[`descricao-${id}`] as string,
				videoLink: data[`videolink-${id}`] ? data[`videolink-${id}`] as string : "",
			}
			const createModulo = API.graphql({
				query: customCreateModulo,
				variables: {input: vars},
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
			})
			modulePromisses.push(createModulo)
		}
		const res = await Promise.all(modulePromisses)
		
		console.log(res)
		router.push(`/courses/${cursoId}`)
	}

	return <Stack spacing={6} alignItems='center' sx={{mt: 10, mb: 10}}>
		<Typography variant='h3'>Criação de Curso</Typography>
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={4} alignItems='center'>
				<TextField 
					id='titulo'
					variant='outlined'
					label='Título do Curso'
					type='text'
					margin='dense'
					error={errors['titulo'] ? true : false}
					helperText={errors['titulo'] ? errors['titulo'].message : null}
					{...register("titulo", {
						required: { value: true, message: "Insira o Título" },
						minLength: { value: 4, message: "Títulos devem ter pelo menos 4 caracteres"},
						maxLength: { value: 100, message: "Títulos devem ter no máximo 100 caracteres"},
					})}
				/>
				<TextField 
					id='descricao'
					variant='outlined'
					label='Descrição do Curso'
					type='text'
					margin='dense'
					error={errors['descricao'] ? true : false}
					helperText={errors['descricao'] ? errors['descricao'].message : null}
					{...register("descricao", {
						required: { value: true, message: "Insira uma descrição" },
						minLength: { value: 10, message:  "Descrições devem ter pelo menos 10 caracteres"},
						maxLength: { value: 5000, message: "Descrições devem ter no máximo 5000 caracteres"},
					})}
				/>
				<TextField 
					id='preco'
					variant='outlined'
					label='Preco do Curso'
					type='number'
					margin='dense'
					error={errors.preco ? true : false}
					helperText={errors.preco ? errors.preco.message : null}
					{...register("preco", {
						required: { value: true, message: "Insira um Valor" },
					})}
				/>
				{modulos.map((i, index) => {
					return <Stack key={index} sx={{mt: 10, background: 'light grey'}}>
						<Typography variant='h6' key={`title-${index}`}>
							Modulo {index + 1}
							<IconButton key={`del-${index}`} onClick={() => removeModulo(i)}>
								<DeleteIcon key={`delico-${index}`}/>
							</IconButton>
						</Typography>
						<TextField key={`titulo-${index}`}
							id={`titulo-${i}`}
							variant='outlined'
							label='Título do Módulo'
							type='text'
							margin='dense'
							sx={{mr: 2, ml: 2}}
							error={errors[`titulo-${i}`] ? true : false}
							helperText={errors[`titulo-${i}`] ? errors[`titulo-${i}`]?.message : null}
							{...register(`titulo-${i}`, {
								required: { value: true, message: "Insira o Título" },
								maxLength: { value: 500, message: "Títulos de modulo devem ter no máximo 500 caracteres"},
							})}
						/>
						<TextField key={`descricao-${index}`}
							id={`descricao-${i}`}
							variant='outlined'
							label='Descrição do Curso'
							type='text'
							margin='dense'
							sx={{mr: 2, ml: 2}}
							error={errors[`descricao-${i}`] ? true : false}
							helperText={errors[`descricao-${i}`] ? errors[`descricao-${i}`]?.message : null}
							{...register(`descricao-${i}`, {
								required: { value: true, message: "Insira uma descrição" },
								minLength: { value: 4, message:  "Descrições devem ter pelo menos 4 caracteres"},
								maxLength: { value: 10000, message: "Descrições devem ter no máximo 200 caracteres"},
							})}
						/>
						<TextField key={`link-${index}`}
							id={`videolink-${i}`}
							variant='outlined'
							label='link do video'
							type='text'
							margin='dense'
							sx={{mr: 2, ml: 2}}
							error={errors[`videolink-${i}`] ? true : false}
							helperText={errors[`videolink-${i}`] ? errors[`videolink-${i}`]?.message : null}
							{...register(`videolink-${i}`,{
								required: { value: true, message: "Insira um Valor" },
							})}
						/>
					</Stack>
				})}
				<Stack direction='row' spacing={2}>
					<Button type='submit' variant='contained'>Criar Curso</Button>
					<Button variant='contained' onClick={addModulo}>Adicionar Módulo</Button>
				</Stack>
			</Stack>
		</form>
	</Stack>
}