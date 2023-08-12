'use client'

import { Typography, Box } from '@mui/material'

import Buttons from './buttons'

const background = '/home/bg.png'

export default function Header() {
	return (
		<Box sx={{ 
			backgroundImage: `url(${background})`, 
			backgroundSize: 'cover',
			width:'100%',
			aspectRatio: '10/4',

			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<Typography variant='h1' sx={{
				fontSize: 56, fontWeight: 'bold', color: '#C73700'
			}}>Aprimore os seus Conhecimentos!</Typography>
			<Buttons/>
		</Box>
	)
}
