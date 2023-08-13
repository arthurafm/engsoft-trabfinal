'use client'


// import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function Carousel({itemData}) {
// 	return (
//         <ImageList sx={{ width: '90%', my: '3%' }} cols={3}>
//             {itemData.map((item) => (
//                 <Link href={item.link} style={{ margin: '0 5%' }}>
//                     <ImageListItem key={item.img} sx={{ height: '100%', aspectRatio: '4/5.5' }}>
//                         <Image
//                             src={item.img}
//                             alt={item.title}
//                             height={'500'}
//                             width={'500'}
//                             style={{
//                                 height: '100%',
//                                 width: '100%',
//                                 objectFit: 'cover'
//                             }}
//                         />
//                         <ImageListItemBar
//                             title={item.title}
//                             subtitle={item.author}
//                         />
//                     </ImageListItem>
//                 </Link>
//             ))}
//         </ImageList>
// 	)
// }


import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

export default function Carousel({itemData}) {
	return (
        <Box sx={{ width: '97%', display: 'flex', my: '3%', justifyContent: 'space-evenly' }}>
            {itemData.map((item) => (
                <Card sx={{ width: '31%', height: '100%', borderRadius: '2%' }}>
                    <CardActionArea href={item.link}>
                        <CardMedia
                            component='img'
                            image={item.img}
                            alt={item.title}
                            sx={{ aspectRatio: '4.7/5' }}
                        />
                        <CardContent sx={{ 
                            backgroundColor: '#1E1E1E', color: 'white', 
                            fontFamily: 'Roboto', textAlign: 'center'
                        }}>
                            <Typography sx={{ fontSize: 32 }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: 18 }}>
                                {item.author}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box> 
	)
}

