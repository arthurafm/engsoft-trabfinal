'use client'

import React from 'react'

import {Stack, Typography} from '@mui/material'

interface Props{
	title: string | undefined;
	description: string | undefined;
	videoLink: string | undefined;
}
export default function ModuleCard ({title, description, videoLink} : Props) {
	return (
		<Stack sx={{ maxWidth: '30vw', textAlign: 'center' }}>
			<Typography variant="h4">{title}</Typography>
			<Typography variant="subtitle1">{description}</Typography>
			{videoLink && <iframe width="420" height="315" src={videoLink} title='video'></iframe>}
		</Stack>
	)
}