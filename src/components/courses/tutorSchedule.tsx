import React from 'react'

import { Box, Typography, Divider, Table, TableBody, TableCell, TableHead, TableContainer, TableRow, Paper, Button, Dialog, DialogTitle, Stack, TextField } from '@mui/material'

import { useState } from 'react'

const TutorSchedule = (isProfessor: bool) => {

    const tutors = [
        {
            name: 'Renato Portaluppi',
            schedule: '19h-20h',
            days: 'Segunda e Quarta',
        },
        {
            name: 'Renato Portaluppi',
            schedule: '19h-20h',
            days: 'Segunda e Quarta',
        },
        {
            name: 'Renato Portaluppi',
            schedule: '19h-20h',
            days: 'Segunda e Quarta',
        },
    ]

    const [[open, locked], setOpen] = useState([false, false]);

	const handleClickOpen = () => setOpen([true, false]);
	const handleClickLock = (lockState: boolean) => setOpen([true, lockState]);
	const handleClose = () => {
		if(!locked){
			setOpen([false, false])
		}
	};

    const handleSubmit = () => {
        console.log('Formulário de novo monitor submittado')
    }


    return (
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
                            <TableCell>Monitor</TableCell>
                            <TableCell align="right">Horário</TableCell>
                            <TableCell align="right">Dias</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tutors.map((tutor, i) => {
                                return (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{tutor.name}</TableCell>
                                        <TableCell align="right">{tutor.schedule}</TableCell>
                                        <TableCell align="right">{tutor.days}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                isProfessor &&
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
                            <form onSubmit={handleSubmit}>
                                <Stack sx={{mr: 4, ml: 4}} spacing={2}>
                                    <TextField
                                        id='name'
                                        variant='outlined'
                                        label='Nome do monitor'
                                        type='text'
                                        margin='dense' />
                                    <TextField
                                        id='schedule'
                                        variant='outlined'
                                        label='Horário do monitor'
                                        type='text'
                                        margin='dense' />
                                    <TextField
                                        id='days'
                                        variant='outlined'
                                        label='Dias do monitor'
                                        type='text'
                                        margin='dense' />
                                    
                                    <Button variant='contained' type='submit'>
                                        <Typography variant='h6' color='white'>Adicionar</Typography> 
                                    </Button>
                                    <Box sx ={{ pb: 2,}} />
                                </Stack>
                            </form>
                        </Dialog>
                    </div>
            }
        </Box>
    )
}

export default TutorSchedule