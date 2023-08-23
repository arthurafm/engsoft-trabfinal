'use client'

import { useUser } from '@/context/UserContext';
import { Stack, TextField, Button, IconButton, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { Delete, ExpandMore } from '@mui/icons-material';
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
	// if(!cognitoUser || userData?.__typename != "Professor"){
	// 	return <div>Ops, você não é professor</div>
	// }
	const { register, handleSubmit, formState: { errors } } = useForm<IFormCriarCurso>() as any;
	const router = useRouter()
	const [modulos, setModulos] = useState<number[]>([])
	const [moduloId, setModuloId] = useState(1)

	const styles = {
		Buttons : {
			color: 'white',
			background: 'primary.light',
			borderRadius: '1rem',
			textTransform: 'none',
			border: 1,
			borderColor: 'transparent',
			fontWeight: 600,
			py: 1,
			px: 3,

			width: 'fit-content',
			height: 'fit-content',
			fontSize: 20,

			'&:hover': {
				backgroundColor: 'white',
				color: '#E35725',
				borderColor: '#FF7222',
			},
		},
		Inputs : {
			width: '100%'
		} 
    }

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

		// for(const id of modulos){
		// 	if(!data[`titulo-${id}`] || !data[`descricao-${id}`] || !data[`videolink-${id}`]){
		// 		console.log("Input nula da entrada " + id)
		// 		return
		// 	}
		// }
		// let cursoId = undefined
		// /*
		// const qEcho = await API.graphql({
		// 	query: echo,
		// 	variables: {msg: "hello"},
		// 	authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
		// })
		// console.log(qEcho)
		// */
		// try{
		// 	const vars: CriarCursoMutationVariables = {
		// 		nome: data['titulo'],
		// 		preco: Number(data['preco']),
		// 		descricao: data['descricao']
		// 	}
		// 	console.log(vars)
		// 	const criarCurso = (await API.graphql({
		// 		query: customCriarCurso,
		// 		variables: vars,
		// 		authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
		// 	})) as { data: CriarCursoMutation } 
		// 	cursoId = criarCurso.data.criarCurso.id
		// 	if(!cursoId){
		// 		throw new Error("Criação de curso resultou em nenhum id")
		// 	}
		// }catch(error: any){
		// 	console.error(error)
		// 	return
		// }
		// let modulePromisses = []
		// for(const id of modulos){
		// 	const vars: CreateModuloInput = {
		// 		titulo: data[`titulo-${id}`] as string,
		// 		descricao: data[`descricao-${id}`] as string,
		// 		videoLink: data[`videolink-${id}`] ? data[`videolink-${id}`] as string : "",
		// 	}
		// 	modulePromisses.push(API.graphql({
		// 		query: customCreateModulo,
		// 		variables: {input: vars},
		// 		authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
		// 	}))
		// }
		// await Promise.all(modulePromisses)
		
		// router.push(`/courses/${cursoId}`)
	}

	return <Stack spacing={6} alignItems='center' sx={{ minHeight:'82vh' }}>
		<Typography variant='h3' mt={10} fontFamily='Roboto' fontSize={60} fontWeight={700} color='#C73700'>Criação de Curso</Typography>
		<Box pb={10} width='40%'>
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={4} alignItems='center'>
				<Accordion sx={{width: '100%'}}>
					<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					>
					<Typography variant='h6' fontFamily='Roboto' fontWeight={700} color='#C73700'>
						Informações Gerais
					</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TextField 
							id='titulo'
							variant='outlined'
							label='Título do Curso'
							type='text'
							margin='dense'
							error={errors['titulo'] ? true : false}
							helperText={errors['titulo'] ? errors['titulo'].message : null}
							sx={styles.Inputs}
							{...register("titulo", {
								required: { value: true, message: "Insira o Título" },
								minLength: { value: 8, message: "Títulos devem ter pelo menos 8 caracteres"},
								maxLength: { value: 30, message: "Títulos devem ter no máximo 30 caracteres"},
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
							sx={styles.Inputs}
							{...register("descricao", {
								required: { value: true, message: "Insira uma descrição" },
								minLength: { value: 10, message:  "Descrições devem ter pelo menos 20 caracteres"},
								maxLength: { value: 200, message: "Descrições devem ter no máximo 200 caracteres"},
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
							sx={styles.Inputs}
							{...register("preco", {
								required: { value: true, message: "Insira um Valor" },
							})}
						/>
					</AccordionDetails>
				</Accordion>
				{modulos.map((i, index) => {
					return <Accordion key={index} sx={{width: '100%'}}>
						<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						>
						<Typography variant='h6' key={`title-${index}`} fontFamily='Roboto' fontWeight={700} color='#C73700'>
							Modulo {index + 1}
							<IconButton key={`del-${index}`} onClick={() => removeModulo(i)}>
								<Delete key={`delico-${index}`}/>
							</IconButton>
						</Typography>
						</AccordionSummary>
							<AccordionDetails>
							<TextField key={`titulo-${index}`}
								id={`titulo-${i}`}
								variant='outlined'
								label='Título do Módulo'
								type='text'
								margin='dense'
								sx={styles.Inputs}
								error={errors[`titulo-${i}`] ? true : false}
								helperText={errors[`titulo-${i}`] ? errors[`titulo-${i}`]?.message : null}
								{...register(`titulo-${i}`, {
									required: { value: true, message: "Insira o Título" },
									maxLength: { value: 30, message: "Títulos de modulo devem ter no máximo 30 caracteres"},
								})}
							/>
							<TextField key={`descricao-${index}`}
								id={`descricao-${i}`}
								variant='outlined'
								label='Descrição do Módulo'
								type='text'
								margin='dense'
								sx={styles.Inputs}
								error={errors[`descricao-${i}`] ? true : false}
								helperText={errors[`descricao-${i}`] ? errors[`descricao-${i}`]?.message : null}
								{...register(`descricao-${i}`, {
									required: { value: true, message: "Insira uma descrição" },
									minLength: { value: 20, message:  "Descrições devem ter pelo menos 20 caracteres"},
									maxLength: { value: 200, message: "Descrições devem ter no máximo 200 caracteres"},
								})}
							/>
							<TextField key={`link-${index}`}
								id={`videolink-${i}`}
								variant='outlined'
								label='link do video'
								type='text'
								margin='dense'
								sx={styles.Inputs}
								error={errors[`videolink-${i}`] ? true : false}
								helperText={errors[`videolink-${i}`] ? errors[`videolink-${i}`]?.message : null}
								{...register(`videolink-${i}`,{
									required: { value: true, message: "Insira um Valor" },
								})}
							/>
						</AccordionDetails>
					</Accordion>
				})}
				<Stack direction='row' spacing={20} mb={10}>
					<Button variant='contained' onClick={addModulo} sx={styles.Buttons}>Adicionar Módulo</Button>
					<Button type='submit' variant='contained' sx={styles.Buttons}>Criar Curso</Button>
				</Stack>
			</Stack>
		</form>
		</Box>
	</Stack>
}