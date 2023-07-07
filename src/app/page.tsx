'use client'
import styles from './page.module.css'

import { useState } from 'react'
import { Button, Typography, Box } from '@mui/material'

export default function Home() {
	const [cont, addCount] = useState(0)
	const clicked = () =>{
		addCount(cont + 1)
	}
	const reset = () =>{
		addCount(0)
	}
	return (
		<main className={styles.main}>
			<Box component='span' sx={{ p: 30 }}>
				<Button variant='outlined' onClick={clicked} sx={{my:2}}>Add 1</Button>
				<Button variant='outlined' onClick={reset} sx={{my:2}}>Reset</Button>
			</Box>
			<Typography variant='h1'>You clicked {cont} times!</Typography> 
		</main>
	)
}
