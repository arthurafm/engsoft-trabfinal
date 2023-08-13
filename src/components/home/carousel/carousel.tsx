'use client'

import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

export default function Carousel({itemData}) {
    const styles = {
        Box : { 
            width: '97%', 
            display: 'flex', 
            my: '3%', 
            justifyContent: 'space-evenly' 
        },
        Card : { 
            width: '31%', 
            height: '100%', 
            borderRadius: '2%' 
        },
        CardMedia : { 
            aspectRatio: '4.7/5' 
        },
        CardContent : { 
            backgroundColor: '#C73700'
        },
        Text : {
            color: 'white', 
            fontFamily: 'Roboto', 
            textAlign: 'center'
        },
        Title : {
            fontSize: 32
        },
        Author : {
            fontSize: 18
        }
    }

	return (
        <Box sx={styles.Box}>
            {itemData.map((item) => (
                <Card sx={styles.Card}>
                    <CardActionArea href={item.link}>
                        <CardMedia component='img' image={item.img} alt={item.title} sx={styles.CardMedia}/>
                        <CardContent sx={styles.CardContent}>
                            <Typography sx={{...styles.Text, ...styles.Title}}>{item.title}</Typography>
                            <Typography sx={{...styles.Text, ...styles.Author}}>{item.author}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box> 
	)
}


// ====== Another Implementation ====== //
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
