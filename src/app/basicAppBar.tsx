'use client'
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Avatar,
	Button,
} from '@mui/material'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';

function BasicAppBar() {
	return (
	<Box sx={{flexGrow: 1}}>
    <AppBar position="static" variant='elevation'>
	<Toolbar disableGutters>
		<Typography
		variant="h6"
		noWrap
		href="/"
		component="a"
		sx={{
			mr: 2,
			ml: 2,
			fontFamily: 'inter',
			fontWeight: 'bold',
			color: 'inherit',
			textDecoration: 'none',
		}}
		>
		Guide Me
		</Typography>
		{/* diplay of the elements in other sizes */}
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			<Button sx={{ my: 2, color: 'white', display: 'block' }}>
			Mentorias
			<ArrowDropDownIcon/>
			</Button>
			<Button sx={{ my: 2, color: 'white', display: 'block' }}>
			Cursos
			<ArrowDropDownIcon/>
			</Button>
			<Button sx={{ my: 2, color: 'white', display: 'block' }}>
			Ajuda
			<ArrowDropDownIcon/>
			</Button>
		</Box>
		<Box sx={{ flexGrow: 0, mr: 2}}>
		<Button
			variant='contained'
			href="/signup"
			component="a"
			LinkComponent={Link}
		>
			Log in / Registre-se
		</Button>
		{/*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
		</Box>
	</Toolbar>
    </AppBar>
	</Box>
  );
}
export default BasicAppBar;
