'use client'

import { Button, Typography, Box, Stack } from '@mui/material'

import Header from '../components/home/header'
import Carousel from '../components/home/carousel'

export default function Home() {
	return (
		<Box>
			<Header/>
			<Carousel/>
		</Box>
	)
}
