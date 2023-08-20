'use client'

import { Typography, Box } from '@mui/material'

import Buttons from './buttons'

const background = '/home/bg.png'

export default function Index() {
	const styles = {
		Box : { 
			backgroundImage: `url(${background})`, 
			backgroundSize: 'cover',
			width:'100%',
			aspectRatio: '10/4',

			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		},
		Title : {
			fontSize: 56, 
			fontWeight: 'bold', 
			color: '#C73700'
		}
	}

	return (
		<Box sx={styles.Box}>
			<Typography sx={styles.Title}>Aprimore os seus Conhecimentos!</Typography>
			<Buttons/>
		</Box>
	)
}
