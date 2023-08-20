'use client'

import { Button, Typography, Box } from "@mui/material"
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ratingToStars = (rating: number) => {
	return Array(5).fill(1).map((v, i) => {
		const star = rating - i
		if (star >= 1) { return ( <StarIcon key={i} sx={{ width: '4vh', height: '4vh'}} />) }
		else if (star > 0) { return ( <StarHalfIcon key={i} sx={{ width: '4vh', height: '4vh'}} />) }
		else { return ( <StarBorderIcon key={i} sx={{ width: '4vh', height: '4vh'}} />) }
	})
}

function PageBought () {

}

function PageUnbought ( courseName: string,
						courseRating: number,
						coursePrice: number,
						courseIcon: string,
						courseDescription: string,
						professorIcon: string,
						professorDescription: string ) 	{
	return (
		<Box
			sx = {{
				minHeight: '100vh',
				minWidth: '100vw',
				margin: 0,
				background: 'linear-gradient(to bottom, #FFE199 0 40vh, white 40vh 100vh)'
			}}>
			<Box
				sx={{
				display: 'flex',
				flexDirection: 'row',
				width: '80%',
				pl: '10%',
				pt: '28.2vh'
				}}>
				<Image src={courseIcon} alt='Ícone do curso' width={200} height={200} style={{ width: '20vh', height: '20vh' }} />
				<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					pl: '2.5vw',
					m: 'auto 0',
				}}>
				<Typography
					variant="h6"
					noWrap
					component="h6"
					sx = {{
					fontFamily: 'Roboto',
					fontWeight: 700,
					fontSize: '2.5rem',
					padding: 0,
					}}>
					{courseName}
				</Typography>
				<Box
					sx={{
					display: 'flex',
					flexDirection: 'row',
					}}>
					{ratingToStars(courseRating)}
				</Box>
				</Box>
				<Box sx={{
				m: 'auto 0 auto auto',
				pb: '2%',
				}}>
				<Button
					key="buy"
					sx={{ color: 'white',
						fontSize: '1.2rem',
						background: '#E35725',
						borderRadius: '1rem',
						textTransform: 'none',
						border: 1,
						borderColor: 'transparent',
						fontWeight: 600,
						width: '6rem',
						height: '3rem',
						'&:hover': {
							backgroundColor: 'white',
							color: '#E35725',
							borderColor: '#FF7222',
						},}}>
					{coursePrice} GP
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '80%',
					margin: 'auto',
				}}>
				<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'top',
					mr: '10vw',
					alignItems: 'space-between',
					pl: '4vh',
				}}>
				<Image src={professorIcon} alt='Ícone do professor' width={120} height={120} style={{ width: '12vh', height: '12vh' }} />
				<Typography
					sx={{
					fontFamily: 'Roboto',
					fontWeight: 400,
					textAlign: 'justify',
					fontSize: '1.2rem',
					}}>
					{professorDescription}
				</Typography>
				</Box>
				<Box>
				<Typography
					sx={{
					fontFamily: 'Roboto',
					fontWeight: 400,
					textAlign: 'justify',
					fontSize: '1.2rem',
					}}
					paragraph>
					{courseDescription}
				</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default function Page({ params }: { params: { id: string }}){
	// Alterar para valores específicos do curso/professor
	const courseName = 'Lorem Ipsum';
	const courseRating = 4.5;
	const coursePrice = 300;
	const courseIcon = '/gremio.png'
	const courseDescription = 'Lorem ipsum dolor sit amet. Ut voluptatem eaque in molestiae nesciunt et enim dolores ea pariatur expedita quo illum autem? Ut odio officiis non repellat adipisci et architecto quia.\nEt earum laudantium aut voluptatum illo aut quod culpa vel temporibus inventore sit fuga expedita! Eum quam repudiandae sit explicabo totam ut sapiente aliquid. Ut saepe quia a ipsa omnis aut culpa fugiat sed delectus iure eum laboriosam quibusdam et quibusdam eligendi. Qui provident possimus vel delectus distinctio est sunt facere.\nEt molestias dolorem et dignissimos dolores eos beatae molestias eos necessitatibus saepe aut ipsum voluptatem ab voluptatem quidem. Ut laudantium sunt qui unde accusantium id architecto harum. Est perspiciatis consequatur ut repellendus maxime et tenetur voluptates qui cupiditate incidunt sed voluptas ipsum. Est consequatur commodi est doloremque fuga sed rerum accusantium et provident unde.';
	const professorIcon = '/gremio.png';
	const professorDescription = 'Lorem ipsum dolor sit amet. Ut voluptatem eaque in molestiae';
	
	/* Alterar para acesso ao curso */
	const courseBought = false;

	return courseBought?
			PageBought()
			:
			PageUnbought(courseName, courseRating, coursePrice, courseIcon, courseDescription, professorIcon, professorDescription)
}