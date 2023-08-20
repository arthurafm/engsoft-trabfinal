'use client'
import Box from '@mui/material/Box'
import Links from './links'
import Divider from './divider'
import Text from './text'

export default function Footer() {
	const styles = {
		OutBox : {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			height: 'fit-content',
			width: '100%',
			backgroundColor: '#C73700'
		},
		InBox : {
			display: 'flex',
			width: '98%',
			alignItems: 'center',
			m: '18px auto'
		}
	}

	return (
		<Box sx={styles.OutBox}>
			<Divider/>
			<Box sx={styles.InBox}>
				<Links/>
				<Text/>
			</Box>
		</Box>
  	);
}
