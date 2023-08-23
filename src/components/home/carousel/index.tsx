'use client'

import { Typography, Box } from '@mui/material';
import Carousel from './carousel'
import { Curso } from '@/API';

interface Props{
	cursos: Curso[]
}

export default function Index({ cursos }: Props) {
  const styles = {
    Box : {
      width: '100%', 
      height: '80%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			alignItems: 'center',
      backgroundColor: '#FF7222'
    },
    Title : {
      fontSize: 56, 
      fontWeight: 'bold', 
      color: 'white', 
      mt: '3%'
    }
  }

	return (
		<Box sx={styles.Box}>
			<Typography variant='h1' sx={styles.Title}>Encontre o curso perfeito para você!</Typography>
			<Carousel itemData={cursos}/>
		</Box>
	)
}

const itemData = [
  {
    img: '/home/83.jpg',
    title: '83 - 1',
    author: ':)',
    link: '/home/83.jpg'
  },
  {
    img: '/home/95.jpg',
    title: '95 - 2',
    author: ':D',
    link: '/home/95.jpg'
  },
  {
    img: '/home/17.jpg',
    title: '17 - 3',
    author: ':o',
    link: '/home/17.jpg'
  }
];