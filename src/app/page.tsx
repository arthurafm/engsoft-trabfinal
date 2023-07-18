'use client'
import styles from './page.module.css'

import { useState } from 'react'
import { Button, Typography, Box } from '@mui/material'
import Link from 'next/link'

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
			<Link href="/signup">Sign up</Link>
			<Box component='span' sx={{ p: 30 }}>
				<Button variant='contained' onClick={clicked} sx={{my:2}}>Add 1</Button>
				<Button variant='outlined' onClick={reset} sx={{my:2}}>Reset</Button>
			</Box>
			<Typography variant='h4'>You clicked {cont} times!</Typography> 
		</main>
	)
}
