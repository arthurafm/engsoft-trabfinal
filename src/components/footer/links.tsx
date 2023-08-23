'use client'
import Box from '@mui/material/Box'

import Link from 'next/link';
import Image from 'next/image'

export default function Links() {
    const styles = {
        Link : {
            marginRight: '6px',
            display: 'flex',
            alignItems: 'center'
        },
        Box : {
            width: '33%', 
            height: '100%',
            display: 'flex', 
            justifyContent: 'left'
        }
    }

	return (
        <Box sx={styles.Box}>
            <Link href="https://twitter.com/Gremio" target="_blank" style={styles.Link}>
                <Image src="/footer/Twitter.svg" alt="Twitter" width="41" height="41" />
            </Link>
            <Link href="https://www.facebook.com/Gremio/" target="_blank" style={styles.Link}>
                <Image src="/footer/Facebook.svg" alt="Facebook" width="41" height="41"/>
            </Link>
            <Link href="https://www.youtube.com/@CanaldoFarid" target="_blank" style={styles.Link}>
                <Image src="/footer/Youtube.svg" alt="Youtube" width="41" height="41"/>
            </Link>
            <Link href="https://Instagram.com/Gremio" target="_blank" style={styles.Link}>
                <Image src="/footer/Instagram.svg" alt="Instagram" width="41" height="41"/>
            </Link>
            <Link href="/" target="_blank" style={styles.Link}>
                <Image src="/footer/Whatsapp.svg" alt="Whatsapp" width="41" height="41"/>
            </Link>
            <Link href="/" target="_blank" style={styles.Link}>
                <Image src="/footer/Email.svg" alt="Email" width="41" height="41"/>
            </Link>
        </Box>
    );
}
