'use client'

import React from 'react'

import {Stack, Typography, Divider, Collapse, IconButton, Box, CardMedia} from '@mui/material'

import {KeyboardArrowUp, KeyboardArrowDown} from '@mui/icons-material'

import { useState } from 'react'

interface Props{
	title: string | undefined;
	description: string | undefined;
	videoLink: string | undefined;
}
export default function ModuleCard ({title, description, videoLink} : Props) {

	const [open, setOpen] = useState(false)

	return (
		<Stack sx={{ maxWidth: '40vw', minWidth: '40vw', textAlign: 'center' }}>
			<Typography variant="h4" sx={{ pb: 2, fontWeight: 500, color: '#C73700', }}>{title}</Typography>
			<Divider />
			<IconButton
				aria-label="expand row"
				size="small"
				sx={{
					overflow: 'hidden',
					":hover": {
						backgroundColor: 'transparent',
					},
					":active": {
						backgroundColor: 'transparent',
					},
					borderRadius: 0,
				}}
				onClick={() => setOpen(!open)}
			>
				{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
			</IconButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
					<Box sx={{
						height: '30vw',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						
					}}>
						<Typography variant="subtitle1" sx={{textAlign: 'justify', mb: 2}}>{description}</Typography>
						{videoLink && <iframe width="100%" height="75%" src={videoLink} title='video' />}
					</Box>'
			</Collapse>
			<Divider />
		</Stack>
	)
}