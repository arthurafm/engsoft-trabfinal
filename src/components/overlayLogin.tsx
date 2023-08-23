import { useState, useEffect, ChangeEvent } from 'react';
import { Button, Checkbox, Dialog, DialogTitle, Typography } from '@mui/material';
import { Stack, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CognitoUser } from "@aws-amplify/auth";

function validateCPF(cpf: string){
	if(cpf.length != 11) return false;
	let sum = 0;
	let allEqual = true;
	for (var i = 0; i < cpf.length - 1; i++) {
		if (cpf[i] != cpf[i + 1])
			allEqual = false;
	}
	if (allEqual)
		return false;

	for (i = 1; i <= 9; i++)
		sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
	let remainder = (sum * 10) % 11;

	if ((remainder == 10) || (remainder == 11))
		remainder = 0;
	if (remainder != parseInt(cpf.substring(9, 10)))
		return false;

	sum = 0;
	for (i = 1; i <= 10; i++)
		sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); remainder = (sum * 10) % 11;

	if ((remainder == 10) || (remainder == 11))
		remainder = 0;
	if (remainder != parseInt(cpf.substring(10, 11)))
		return false;

	return true;
}

interface IFormLogin {
	email: string;
	senha: string;
}

//TODO: display erros more broadly

function LoginDialog(props: IDialog) {
	const { changeToForm, closeForm } = props
	const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>() as any

	const handleChangeToRegister = () => changeToForm(AuthForms.Register);

	const onSubmit = async (data: IFormLogin) => {
		try {
			await Auth.signIn(data.email, data.senha)
			closeForm()
		}catch(error){
			alert(error)
		}
	};

	return (<>
		<DialogTitle fontSize={25}>Entrar</DialogTitle>
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack sx={{mr: 4, ml: 4}} spacing={2}>
				<TextField 
					id='email'
					variant='outlined'
					label='Email do Usuário'
					type='text'
					margin='dense'
					error={errors.email ? true : false}
					helperText={errors.email ? errors.email.message : null}
					{...register("email", {
						required: { value: true, message: "Insira o seu Email" },
						pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Padrão inválido para o email"}
					})}
				/>
				<TextField 
					id='senha' 
					variant='outlined' 
					label='Senha do Usuário' 
					type='password' 
					margin='dense'
					error={errors.senha ? true : false}
					helperText={errors.senha ? errors.senha.message : null}
					{...register("senha", {
						required: { value: true, message: "Insira a sua Senha" },
						minLength: { value: 8, message: "Senhas têm no mínimo 8 caracteres"}
					})}
				/>
				<Button variant='contained' type='submit'>
					<Typography variant='h6' color='white'>Entrar</Typography> 
				</Button>
			</Stack>
		</form>
		<Typography variant='subtitle1' sx={{mr: 4, ml:4, mb: 3, mt: 1}}>
			Primeira vez no Guide me?
			<Button sx={{display: 'inline'}} onClick={handleChangeToRegister}>
				Cadastre-se
			</Button>
		</Typography></>
	);
}

interface IFormRegister {
	email: string;
	nome: string;
	cpf: string;
	registerAsProfessor: boolean;
	senha: string;
	confirmaSenha: string;
}

function RegisterDialog(props: IDialog) {
	const { changeToForm, closeForm, lockForm } = props
	const { control, register, watch, handleSubmit, formState: { errors } } = useForm<IFormRegister>() as any

	const [isProfessor, setIsProfessor] = useState(false)
	//(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
	const handleSetIsProfessor = (event: ChangeEvent<HTMLInputElement>, checked:boolean) => {
		setIsProfessor(checked)
	}

	const handleChangeToLogin = () => changeToForm(AuthForms.Login);

	const onSubmit = async (data: IFormRegister) => {
		try {
			await registerAccountAWS(data)
			changeToForm(AuthForms.Confirmation)
		}catch(error){
			alert(error)
		}
	
	};
	async function registerAccountAWS(data: IFormRegister): Promise<CognitoUser>{
		try {
			const { user } = await Auth.signUp({
				username: data.email,
				password: data.senha,
				attributes: {
					'custom:nome' : data.nome,
					'custom:cpf': data.cpf,
					'custom:isProfessor': data.registerAsProfessor ? 't' : 'f',
					'custom:tableId': "fake id"
				}
			})
			console.log("Signed up user: ", user)
			return user
		}catch(error){
			throw error
		}
	}

	console.log("register dialog erros?", errors)
	return (<>
		<DialogTitle fontSize={25}>Faça a sua Conta</DialogTitle>
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack sx={{mr: 4, ml: 4}} spacing={2}>
				<TextField 
					id='email'
					variant='outlined'
					label='Email do Usuário'
					type='text'
					margin='dense'
					error={errors.email ? true : false}
					helperText={errors.email ? errors.email.message : null}
					{...register("email", {
						required: { value: true, message: "Insira o seu Email" },
						pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Padrão inválido para o email"}
					})}
				/>
				<TextField 
					id='nome'
					variant='outlined'
					label='Nome do Usuário'
					type='text'
					margin='dense'
					error={errors.nome ? true : false}
					helperText={errors.nome ? errors.nome.message : null}
					{...register("nome", {
						required: { value: true, message: "Insira o seu Nome" },
						minLength: { value: 4, message: "Nomes devem ter pelo menos 4 caracteres"},
						maxLength: { value: 30, message: "Nomes devem ter no máximo 30 caracteres"},
					})}
				/>
				<TextField 
					id='cpf'
					variant='outlined'
					label='CPF do Usuário'
					type='text'
					margin='dense'
					error={errors.cpf ? true : false}
					helperText={errors.cpf ? errors.cpf.message : null}
					{...register("cpf", {
						required: { value: true, message: "Insira o seu CPF" },
						pattern: {  value: /^\d{11}/, message: "Digite CPF completo sem os sepradores"},
						validate: (val: string) =>{
							if(!validateCPF(val)){
								return "CPF inválido"
							}
						},
					})}
				/>
				<TextField 
					id='senha' 
					variant='outlined' 
					label='Senha do Usuário' 
					type='password' 
					margin='dense'
					error={errors.senha ? true : false}
					helperText={errors.senha ? errors.senha.message : null}
					{...register("senha", {
						required: { value: true, message: "Insira a sua Senha" },
						minLength: { value: 8, message: "Senhas têm no mínimo 8 caracteres"}
					})}
				/>
				<TextField 
					id='senha' 
					variant='outlined' 
					label='Confirme a Senha'
					type='password' 
					margin='dense'
					error={errors.confirmaSenha ? true : false}
					helperText={errors.confirmaSenha ? errors.confirmaSenha.message : null}
					{...register("confirmaSenha", {
						required: true,
						validate: (val: string) => {
							if (watch('senha') != val) {
								return "As senhas são diferentes";
							}
						}
					})}
				/>
				<Typography variant='subtitle2'> 
					<Controller
						name="registerAsProfessor"
						control={control}
						render={({ field }) => <Checkbox {...field} size='small' onChange={handleSetIsProfessor} sx={{display: 'inline'}}/>}
					/>
					Registrar-se como Professor? 
				</Typography>
				<Button variant='contained' type='submit'>
					<Typography variant='h6' color='white'>Registrar-se</Typography> 
				</Button>
				{isProfessor && <Typography variant='subtitle2'>
					<Typography display={'inline'} variant='subtitle2' color={'red'}>*</Typography>
					Ao selecionar a opção de se inscrever como professor,
					você deverá enviar um email com as suas credenciais para 
					<Typography variant='subtitle2' fontWeight={'bold'}>valide.se@guideme.site</Typography>
				</Typography>}
			</Stack>
		</form>
		<Typography variant='subtitle1' sx={{mr: 4, ml:4, mb: 3, mt: 1}}>
			Já possui uma conta?
			<Button sx={{display: 'inline'}} onClick={ handleChangeToLogin }>
				Faça Login
			</Button>
		</Typography></>
	);
}

interface IFormConfirmation {
	email: string;
	confirmationcode: string;
}

function ConfirmationDialog(props: IDialog) {
	const { changeToForm, lockForm, closeForm } = props
	const { register, handleSubmit, formState: { errors } } = useForm<IFormConfirmation>() as any

	const [lockSend, setLockSend] = useState(false)

	useEffect(()=> lockForm(true),[])

	const onSubmit = async (data: IFormConfirmation) => {
		setLockSend(true)
		try {
			const event = await Auth.confirmSignUp(data.email, data.confirmationcode);
			lockForm(false)
			setLockSend(false)
			changeToForm(AuthForms.Login)
		}catch(error){
			alert(error)
		}
		setLockSend(false)
	};

	return (<>
		<DialogTitle fontSize={25}>Confirme no Email</DialogTitle>
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack sx={{mr: 4, ml: 4}} spacing={2}>
				<TextField 
					id='email'
					variant='outlined'
					label='Email do Usuário'
					type='text'
					margin='dense'
					error={errors.email ? true : false}
					helperText={errors.email ? errors.email.message : null}
					{...register("email", {
						required: { value: true, message: "Insira o seu Email" },
						pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Padrão inválido para o email"}
					})}
				/>
				<TextField 
					id='confirmationcode'
					variant='outlined'
					label='Código de confirmação'
					type='text'
					margin='dense'
					error={errors.confirmationcode ? true : false}
					helperText={errors.confirmationcode ? errors.confirmationcode.message : null}
					{...register("confirmationcode", {
						required: { value: true, message: "Insira o Código de Confirmação" },
						pattern: { value: /^\d{6}/, message: "Códigos de confirmação são 6 números" },
						length: { value: 6, message: "Códigos de confirmação são 6 números" }
					})}
				/>
				<Button variant='contained' type='submit' disabled={lockSend}>
					<Typography variant='h6' color='white'>Confirmar</Typography> 
				</Button>
			</Stack>
		</form>
		<Typography variant='subtitle1' sx={{mr: 4, ml:4, mb: 3, mt: 1}}>
			Caso ocorra problemas, envie um email para suporte@guideme.com
		</Typography></>
	);
}

enum AuthForms{
	Login,
	Register,
	Confirmation
}

interface IDialog{
	changeToForm: (form: AuthForms) => void;
	closeForm: () => void;
	lockForm: (lockForm: boolean) => void;
}

interface IProperAuthForm extends IDialog{
	formType: AuthForms;
}

function ProperAuthForm(props: IProperAuthForm){
	const {formType, changeToForm, closeForm, lockForm } = props
	switch (formType) {
	case AuthForms.Login:
		return <LoginDialog changeToForm={changeToForm} closeForm={closeForm} lockForm={lockForm}/>
	case AuthForms.Register:
		return <RegisterDialog changeToForm={changeToForm} closeForm={closeForm} lockForm={lockForm}/>
	case AuthForms.Confirmation:
		return <ConfirmationDialog changeToForm={changeToForm} closeForm={closeForm} lockForm={lockForm}/>
	}
}

export default function OverlayLogin() {
	const [[open, locked], setOpen] = useState([false, false]);
	const [authForm, setAuthForm] = useState(AuthForms.Login);

	const handleClickOpen = () => setOpen([true, false]);
	const handleClickLock = (lockState: boolean) => setOpen([true, lockState]);
	const handleClose = () => {
		if(!locked){
			setOpen([false, false])
		}
	};
	const handleChangeToForm = (form: AuthForms) => setAuthForm(form)

	return (
		<div>
			<Button
			variant="contained"
			onClick={handleClickOpen}
			sx = {{
				color: 'white',
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
				},
			}}
			>
				Entrar
			</Button>
			<Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={'xs'}>
				<ProperAuthForm 
					formType={authForm} 
					changeToForm={handleChangeToForm} 
					closeForm={handleClose} 
					lockForm={handleClickLock}
				/>
			</Dialog>
		</div>
	);
}