'use client'

import Button from '@mui/material/Button'

import Link from 'next/link'

interface Props{
	text: string;
	style: any;
	path:string;
}

export default function Butt({ text, style, path }: Props) {
    const default_style = {
        color: 'white',
        background: 'primary.light',
        borderRadius: '1rem',
        textTransform: 'none',
        border: 1,
        borderColor: 'transparent',
        fontWeight: 600,
        p: 0,

        width: '20%',
        height: '150%',
        fontSize: 20,

        '&:hover': {
            backgroundColor: 'white',
            color: '#E35725',
            borderColor: '#FF7222',
        },
    }

	return (
        <Button variant='contained' component={ Link } href={ path } sx={{ ...default_style, ...style }}>{text}</Button>
	)
}
