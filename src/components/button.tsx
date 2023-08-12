'use client'

import { Button } from '@mui/material'

export default function But({text, width}) {
    const style = {
        color: 'white',
        fontSize: 'fit-content',
        background: 'primary.light',
        borderRadius: '1rem',
        textTransform: 'none',
        border: 1,
        borderColor: 'transparent',
        fontWeight: 600,
        width: {width},
        mx: '8%',
        '&:hover': {
            backgroundColor: 'white',
            color: '#E35725',
            borderColor: '#FF7222',
        },
    }

	return (
        <Button variant='contained' size='large' sx={style}>{text}</Button>
	)
}
