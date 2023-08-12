'use client'

import { Typography, Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export default function Carousel() {
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

            <ImageList sx={{ height: '100%', width: '95%', my: '3%' }} cols={3}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} sx={{mx: '4%'}}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.title}
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                    />
                </ImageListItem>
            ))}
            </ImageList>
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