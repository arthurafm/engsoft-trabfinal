'use client'

import React from 'react'

import Link from 'next/link'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface Props{
	img: string | undefined | null;
	courseName: string | undefined | null;
	courseDescription: string | undefined | null;
	coursePath: string | undefined | null;
}

export default function CourseCard ({img, courseName, courseDescription, coursePath} : Props) {
  return (
    <Card sx={{ maxWidth: '30vw', textAlign: 'center' }}>
        <CardActionArea href={`courses/${coursePath}`} component={ Link } >
            <CardMedia
                sx={{ height: '20vh' }}
                image={img == null ? undefined : img}
                title={courseName == null ? undefined : courseName}
            />
            <CardContent sx={{ pb: 4 }} >
                <Typography gutterBottom variant="h5" component="div">
                    {courseName}
                </Typography>
                <Typography sx={{textOverflow: 'ellipsis', overflow: 'hidden', height: 16}} variant="body2" color="text.secondary" >
                    {courseDescription}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}