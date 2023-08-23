import { Box, Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const BuyGPNavbar = () => {

    const [[open, locked], setOpen] = useState([false, false]);

    const handleClickOpen = () => {
        setOpen([true, false])
    }

    const handleClose = () => {
        if(!locked){
			setOpen([false, false])
		}
    }

    const handleSubmit = () => {

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
                <form onSubmit={handleSubmit}>
                    <Stack sx={{mr: 4, ml: 4}} spacing={2}>
                        <TextField
                            id='value'
                            variant='outlined'
                            label='Valor de GuideMe Points'
                            type='text'
                            margin='dense' />

                        <Button variant='contained' type='submit'>
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