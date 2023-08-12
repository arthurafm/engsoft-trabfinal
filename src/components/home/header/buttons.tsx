'use client'

import { Box } from '@mui/material'
import Button from '../../button'

const buttonWidth = '30%';

export default function Buttons() {
	return (
        <Box sx={{
            display: 'flex', width: '50%', pt: '5%',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Button text='Encontre Tutor' width={buttonWidth}/>
            <Button text='Assine um Curso' width={buttonWidth}/>
		</Box>
	)
}
