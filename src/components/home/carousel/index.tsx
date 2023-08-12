'use client'

import { Typography, Box } from '@mui/material';
import Carousel from './carousel'

export default function Index() {
	return (
		<Box sx={{ 
			backgroundColor: '#FF7222', 
            width: '100%', height: '80vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			alignItems: 'center'
		}}>
			<Typography variant='h1'  sx={{
				fontSize: 56, fontWeight: 'bold', 
                color: 'white', mt: '3%'
			}}>Encontre o curso perfeito para você!</Typography>

            <Carousel itemData={itemData}/>
		</Box>
	)
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  }
];