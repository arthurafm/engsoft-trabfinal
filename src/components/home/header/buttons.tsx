'use client'

import Box from '@mui/material/Box'
import Button from '../../button'

export default function Buttons() {
    const styles = {
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
        <Box sx={styles.Box}>
            <Button text='Adquira um Curso' style={styles.Button} path='/courses' />
		</Box>
	)
}
