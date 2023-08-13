'use client'

import Box from '@mui/material/Box'
import Button from '../../button'

const buttonWidth  = '20vw';
const buttonHeight = '3.5vw';
const fontSize     = '1.5vw';

export default function Buttons() {
    const style = {
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        width: '70vw', 
        pt: '3%'
    }

	return (
        <Box sx={style}>
            <Button text='Encontre Tutor'  width={buttonWidth} height={buttonHeight} fontSize={fontSize}/>
            <Button text='Assine um Curso' width={buttonWidth} height={buttonHeight} fontSize={fontSize}/>
		</Box>
	)
}
