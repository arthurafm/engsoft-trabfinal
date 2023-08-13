'use client'

import { Button } from '@mui/material'

export default function Butt({text, width, height, fontSize}) {
    const style = {
        color: 'white',
        background: 'primary.light',
        borderRadius: '1rem',
        textTransform: 'none',
        border: 1,
        borderColor: 'transparent',
        fontWeight: 600,
        p: 0,

        width: {width},
        height: {height},
        fontSize: {fontSize},
        
        '&:hover': {
            backgroundColor: 'white',
            color: '#E35725',
            borderColor: '#FF7222',
        },
    }

	return (
        <Button variant='contained' sx={style}>{text}</Button>
	)
}
