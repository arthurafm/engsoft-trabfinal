'use client'

import { Button, Typography, Box, Stack } from '@mui/material'

export default function Home() {
	const buttonWidth = '30%';
	return (
		<Box sx={{
			display: 'flex',
			flexGrow: 1,
			backgroundColor:'primary.light',
			justifyContent: 'center',
		}}>
			<Stack spacing={4} direction="column" sx={{
				width: '50%',
				mt: 10, mb: 6,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Typography variant='h1' textAlign={'center'} sx={{mb: 10}}>Aprimore os seus Conhecimentos</Typography>
				<Button variant='contained' size='large' sx={{ width: buttonWidth }}>Encontre Tutor</Button>
				<Button variant='contained' size='large' sx={{ width: buttonWidth }}>Assine um Curso</Button>
			</Stack>
		</Box>
	)
}
