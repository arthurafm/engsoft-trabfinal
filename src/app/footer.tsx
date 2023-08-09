'use client'
import {
	Box,
	Typography
} from '@mui/material'

import Link from 'next/link';
import Image from 'next/image'

function Footer() {
	return (
	<Box sx={{
		 display: 'flex',
		 flexDirection: 'column',
		 height: 100,
		 width: '100%',
		 backgroundColor: '#C73700',
		 alignItems: 'center',
	}}>
		<Box sx={{
			 height: 4,
			 width: '98%',
			 backgroundColor: 'white',
			 margin: '18px auto'
		}}/>
		<Box sx={{ display: 'flex', width: '100%' }}>
			<Box sx={{ width: '33%', height: '100%', display: 'flex', justifyContent: 'left' }}>
				<Link href="https://twitter.com/Gremio"
					  style={{ marginRight: '9px', marginLeft: '3%' }}
				>
					<Image  
						src="/Twitter.svg"
						alt="Twitter"
						width="41"
						height="41"
					/>
				</Link>
				<Link href="https://www.facebook.com/Gremio/"
					  style={{ marginRight: '9px' }}
				>
					<Image  
						src="/Facebook.svg"
						alt="Facebook"
						width="41"
						height="41"
					/>
				</Link>
				<Link href="https://www.youtube.com/@CanaldoFarid"
					  style={{ marginRight: '9px' }}
				>
					<Image  
						src="/Youtube.svg"
						alt="Youtube"
						width="41"
						height="41"
					/>
				</Link>
				<Link href="https://Instagram.com/Gremio"
					  style={{ marginRight: '9px' }}
				>
					<Image  
						src="/Instagram.svg"
						alt="Instagram"
						width="41"
						height="41"
					/>
				</Link>
				<Link href="/"
					  style={{ marginRight: '9px' }}
				>
					<Image  
						src="/Whatsapp.svg"
						alt="Whatsapp"
						width="41"
						height="41"
					/>
				</Link>
				<Link href="/">
					<Image  
						src="/Email.svg"
						alt="Email"
						width="41"
						height="41"
					/>
				</Link>
			</Box>
			<Box sx={{ width: '34%', height: '100%', display: 'flex', justifyContent: 'center' }}>
				<Typography
					sx={{
						fontFamily: 'inter',
						fontWeight: 'bold',
						fontSize: 20,
						color: 'white',
						margin: 'auto'
					}}
				> © Copyright 2023 Guide Me
				</Typography>
			</Box>
			<Box sx={{ width: '33%', height: '100%', display: 'flex', justifyContent: 'right' }}>
				<Typography
					sx={{
						display: 'flex',
						fontFamily: 'inter',
						fontWeight: 'bold',
						fontSize: 'fit-content',
						color: 'white',
						textJustify: 'right',
						margin: 'auto 3% auto 0'
					}}
				> Av. Padre Leopoldo Brentano, 110, Porto Alegre - RS, 90250-590
				</Typography>
			</Box>
		</Box>
	</Box>
  );
}
export default Footer;
