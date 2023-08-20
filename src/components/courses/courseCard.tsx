'use client'

import React from 'react'

import Link from 'next/link'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function CourseCard ({img, courseName, courseDescription, coursePath}) {
  return (
    <Card sx={{ maxWidth: '30vw', textAlign: 'center' }}>
        <CardActionArea href={coursePath} component={ Link } >
            <CardMedia
                sx={{ height: '20vh' }}
                image={img}
                title={courseName}
            />
            <CardContent sx={{ pb: 4 }} >
                <Typography gutterBottom variant="h5" component="div">
                    {courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {courseDescription}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}