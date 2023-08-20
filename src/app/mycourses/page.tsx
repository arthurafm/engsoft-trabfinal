'use client'

import CourseCard from '@/components/courses/courseCard';
import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

import { useState } from 'react';
import { useForm } from 'react-hook-form';

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
                minHeight: '81vh',
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
                Meus Cursos
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
                                    row.map(({ img, name, description, path }, index) => {
                                        return (
                                            <CourseCard img={img} courseName={name} courseDescription={description} coursePath={path} key={index} />
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
                                    row.map(({ img, name, description, path }, index) => {
                                        return (
                                            <CourseCard img={img} courseName={name} courseDescription={description} coursePath={path} key={index} />
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