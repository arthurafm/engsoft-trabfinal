import { Box, Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface IFormComprar{
	creditos: number
}

const BuyGPNavbar = () => {
    const [open, setOpen] = useState(false);
	const [lock, setLock] = useState(false)
	const { register, handleSubmit } = useForm<IFormComprar>() as any

    const handleClickOpen = () => setOpen(true) 
    const handleClose = () => setOpen(false) 

    const onSubmit = async (data: IFormComprar) => {
		console.log(data.creditos)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
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
                    width: '5%',
                    height: '25px',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: '#E35725',
                        borderColor: '#FF7222',
                    },
                }}>+</Button>
            <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={'xs'}>
                <DialogTitle fontSize={25}>Compre GuideMe Points</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={{mr: 4, ml: 4}} spacing={2}>
                        <TextField
                            id='creditos'
                            variant='outlined'
                            label='Valor de GuideMe Points'
                            type='number'
                            margin='dense'
							{...register("creditos", { required: true })}
						/>
                        <Button variant='contained' type='submit' disabled={lock}>
                            <Typography variant='h6' color='white'>Comprar</Typography> 
                        </Button>
                        <Box sx ={{ pb: 2,}} />
                    </Stack>
                </form>
            </Dialog>
        </Box>
    )
}

export default BuyGPNavbar