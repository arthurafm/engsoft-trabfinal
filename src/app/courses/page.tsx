'use client'

import React from 'react'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, TextField } from '@mui/material'

const courseCard = (img: string, courseName: string, courseDescription: string, coursePath: string, id: number) => {
    return (
        <Card key={id} sx={{ maxWidth: '30vw', textAlign: 'center' }}>
            <CardMedia
                sx={{ height: '20vh' }}
                image={img}
                title={courseName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {courseDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={coursePath}>Saiba mais</Button>
            </CardActions>
        </Card>
    );
}


const page = () => {

    const [text, setText] = useState("");
    const { register, handleSubmit } = useForm();

    const courses = [{
        img: "/gremio.png",
        name: "Gremio",
        description: "Gremio é tricampeão da America",
        path: '/',
    },
    {
        img: "/lakers.png",
        name: "Lakers",
        description: "Lakers é 17x campeão do Mundo",
        path: '/',
    },
    {
        img: "/gremio.png",
        name: "Gremio",
        description: "Gremio é tricampeão da America",
        path: '/',
    },
    {
        img: "/lakers.png",
        name: "Lakers",
        description: "Lakers é 17x campeão do Mundo",
        path: '/',
    },
    {
        img: "/gremio.png",
        name: "Gremio",
        description: "Gremio é tricampeão da America",
        path: '/',
    },
    {
        img: "/lakers.png",
        name: "Lakers",
        description: "Lakers é 17x campeão do Mundo",
        path: '/',
    },
    {
        img: "/gremio.png",
        name: "Gremio",
        description: "Gremio é tricampeão da America",
        path: '/',
    },
]

    const gridFourElem = [];
    const gridTwoElem = [];
    const sliceSizeBig = 4;
    const sliceSizeSmall = 2;

    for (let i = 0; i < courses.length; i += sliceSizeBig) {
        const row = courses.slice(i, i + sliceSizeBig)
        gridFourElem.push(row);
    }
    for (let i = 0; i < courses.length; i += sliceSizeSmall) {
        const row = courses.slice(i, i + sliceSizeSmall)
        gridTwoElem.push(row);
    } 

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 800,
                    fontSize: '4vw',
                    color: '#C73700',
                    mt: 3,
                    pb: 3,
                }}
            >
                Todos os Cursos GuideMe
            </Typography>
            <form
                onSubmit={
                    handleSubmit(() => {
                        console.log(text)
                    })
                }
                >
                <TextField
                label="Pesquisa"
                placeholder='Pesquise por um curso ou uma tag'
                id="search"
                {...register("search",
                                {
                                    onChange: (e) => {
                                        setText(e.target.value)
                                    }
                                }
                            )
                }
                sx={{
                    width: '60vw',
                    mb: 4,
                }} />
            </form>
            <Grid container
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  >
                {
                    gridFourElem.map((row, index) => {
                        return (
                            <Grid item
                                columnGap={2}
                                key={index}
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    width: '60%',
                                    mb: 3,
                                }}>
                                {
                                    row.map((course, index) => {
                                        return (
                                            courseCard(course.img, course.name, course.description, course.path, index)
                                        )
                                    })
                                }
                            </Grid>
                        )
                    })
                }
                {
                    gridTwoElem.map((row, index) => {
                        return (
                            <Grid item
                                columnGap={2}
                                key={index}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    width: '60%',
                                    mb: 3,
                                }}>
                                {
                                    row.map((course, index) => {
                                        return (
                                            courseCard(course.img, course.name, course.description, course.path, index)
                                        )
                                    })
                                }
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default page