'use client'

import { Typography, Box, Stack } from '@mui/material'

export default function Carousel() {
	return (
		<Box sx={{ 
			backgroundColor: '#E35725', 
            width: '100%', height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			alignItems: 'center'
		}}>
			<Typography variant='h1' sx={{
				fontSize: 56, fontWeight: 'bold', color: 'white'
			}}>Encontre o curso perfeito para você!</Typography>
		</Box>
	)
}
