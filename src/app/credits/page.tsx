'use client'

import { TextField, Typography, Box } from "@mui/material"

import Button from '../../components/button'

export default function Credits() {
  
  const styles = {
		Box : { 
			backgroundImage: `url(${'/home/bg.png'})`, 
			backgroundSize: 'cover',
			width:'100%',
			aspectRatio: '10/4',

			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		},
		Title : {
			fontSize: 56, 
			fontWeight: 'bold', 
			color: '#C73700'
		}
	}

  const stylesB = {
    Box : {
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        width: '70vw', 
        pt: '3%'
    },
    Button : {
        width: '20vw',
        height: '3.5vw',
        fontSize: '1.5vw'
    }
}

	return (
		<>
			<Box sx={styles.Box}>
			<Typography sx={styles.Title}>Adquira créditos!</Typography>
      <TextField 
					id='creditos'
					variant='outlined'
					label='Entre com o valor de créditos'
					type='text'
					margin='dense'
          style={{
            background: 'rgb(255, 255, 255)',
            width: '17%'
          }}
				/>
			<Box sx={stylesB.Box}>
            <Button text='Adquira Créditos' style={stylesB.Button} path='/courses' />
		  </Box>
		</Box>
		</>
	)
}
