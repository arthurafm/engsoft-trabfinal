import React from 'react'

import {
	Box,
	Typography,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableContainer,
	TableRow,
	Paper,
	Button,
	Dialog,
	DialogTitle,
	Stack, 
	TextField, 
	IconButton, 
	Autocomplete
} from '@mui/material'

import { VideoCameraFront } from '@mui/icons-material';

import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AlunoCurso } from '@/API';

interface IFormAddMonitor{
	aluno: string;
	disponibilidade: string;
	link: string;
}

interface Props {
    isProfessor: boolean | undefined;
	alunos: AlunoCurso[];
	monitores: AlunoCurso[];
	addAsMonitor: (data: IFormAddMonitor) => Promise<AlunoCurso | undefined>;
}

const TutorSchedule = ({isProfessor, alunos, monitores, addAsMonitor}: Props) => {
	const { register, handleSubmit} = useForm<IFormAddMonitor>() as any
	const [ alunosLocal, setAlunosLocal ] = useState<AlunoCurso[]>(alunos)
	const [ monitoresLocal, setMonitoresLocal ] = useState<AlunoCurso[]>(monitores)

    const [open, setOpen] = useState(false);
    const [lock, setLock] = useState(false);

	const handleClickOpen = () => setOpen(true)
	const handleClose = () => {
		if(!lock){
			setOpen(false)
		}
	};

    const onSubmit = (data: IFormAddMonitor) => {
		setLock(true)
		addAsMonitor(data).then((res) => {
			if(res){
				setOpen(false)
				setLock(false)
				setMonitoresLocal([...monitoresLocal, res])
				setAlunosLocal(alunosLocal.filter(aluno => aluno.id != res.id))
			}else{
				setLock(false)
			}
		})
    }

    return (
        <>
            <Divider sx={{ mt: 3, mb: 2,}} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pr: '30%',
                    pl: '30%',
                }}>
                <Divider />
                <Typography
                    variant='h3'
                    sx={{
                        fontWeight: 700,
                        color: '#C73700',
                        pb: 3,
                    }}>
                    Monitores
                </Typography>
                <Divider />
                <TableContainer
                    component={Paper}
                    sx={{
                        mb: 3,
                    }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Monitor</TableCell>
                                <TableCell align="center">Disponibilidade</TableCell>
                                <TableCell align="center">Link para reunião</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {monitoresLocal.map((tutor, i) => {
								return <TableRow
									key={i}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component="th" scope="row" align="center">{tutor?.aluno?.nome}</TableCell>
									<TableCell align="center">{tutor?.horarios}</TableCell>
									<TableCell align="center">
										{tutor?.videoLink && <IconButton href={tutor.videoLink}>
											<VideoCameraFront />
										</IconButton>}
									</TableCell>
								</TableRow>
							})}
                        </TableBody>
                    </Table>
                </TableContainer>
				{isProfessor && <>
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
						width: '13rem',
						height: '3rem',
						'&:hover': {
							backgroundColor: 'white',
							color: '#E35725',
							borderColor: '#FF7222',
						},
						mb: 6,
					}}
					>
						Adicionar Monitor
					</Button>
					<Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={'xs'}>
						<DialogTitle fontSize={25}>Adicione um novo monitor</DialogTitle>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Stack sx={{mr: 4, ml: 4}} spacing={2}>
								<Autocomplete
									disablePortal
									id="aluno"
									options={alunosLocal.map(a => `${a?.aluno?.nome}\t#${a?.aluno?.id}`)
									}
									renderInput={(params) => (
										<TextField {...params} 
											label="Alunos"
											{...register("aluno",{ required: true })}
										/>
									)}
								/>
								<TextField
									id='disponibilidae'
									variant='outlined'
									label='Dias disponíveis do monitor'
									type='text'
									margin='dense'
									{...register("disponibilidade",{ required: true })}
								/>
								<TextField
									id='link'
									variant='outlined'
									label='Link para reunião com monitor'
									type='text'
									margin='dense'
									{...register("link",{ required: true })}
								/>
								<Button variant='contained' type='submit' disabled={lock}>
									<Typography variant='h6' color='white'>Adicionar</Typography> 
								</Button>
								<Box sx ={{ pb: 2,}} />
							</Stack>
						</form>
					</Dialog></>
                }
            </Box>
            <Divider sx={{ mt: 3, mb: 2,}} />
        </>
    )
}

export default TutorSchedule