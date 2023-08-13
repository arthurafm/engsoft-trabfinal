'use client'

import { Box } from '@mui/material'
import Button from '../../button'

const buttonWidth  = '20vw';
const buttonHeight = '5vw';
const fontSize     = '1.5vw';

export default function Buttons() {
	return (
        <Box sx={{
            display: 'flex', width: '80vw', pt: '5%',
            justifyContent: 'space-evenly', alignItems: 'center'
        }}>
            <Button text='Encontre Tutor'  width={buttonWidth} height={buttonHeight} fontSize={fontSize}/>
            <Button text='Assine um Curso' width={buttonWidth} height={buttonHeight} fontSize={fontSize}/>
		</Box>
	)
}
