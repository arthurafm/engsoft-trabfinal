'use client'

import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export default function Carousel({itemData}) {
	return (
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
	)
}
