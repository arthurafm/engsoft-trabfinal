'use client'

import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

import { Curso } from '@/API'

interface Props{
	itemData: Curso[]
}

export default function Carousel({itemData}: Props) {
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
            backgroundColor: '#1E1E1E'
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
            {itemData.map((item, i) => (
                <Card key={i} sx={styles.Card}>
                    <CardActionArea key={i + 100} href={`courses/${item?.id}`}>
                        <CardMedia key={i + 200} component='img' image={'/gremio.png'} alt={item?.nome == null ? undefined : item?.nome} sx={styles.CardMedia}/>
                        <CardContent key={i + 300} sx={styles.CardContent}>
                            <Typography key={i + 400} sx={{...styles.Text, ...styles.Title}}>{item?.nome}</Typography>
                            <Typography key={i + 500} sx={{...styles.Text, ...styles.Author}}>{item?.professor?.nome}</Typography>
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
