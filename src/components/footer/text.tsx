'use client'
import { Box, Typography } from '@mui/material'

export default function Text() {
    const styles = {
        OutBox : {
            display: 'flex',
            width: '67%',
            alignItems: 'center'
        },
        InBox : {
            width: '50%', 
            height: '100%', 
            display: 'flex', 
        },
        CenterBox : { 
            justifyContent: 'center' 
        },
        RightBox : { 
            justifyContent: 'right' 
        },
        Typography : {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'right',
            fontSize: 18
        }
    }

	return (
        <Box sx={styles.OutBox}>
            <Box sx={{ ...styles.InBox, ...styles.CenterBox }}>
                <Typography sx={styles.Typography}> © Copyright 2023 Guide Me </Typography>
            </Box>
            <Box sx={{ ...styles.InBox, ...styles.RightBox }}>
                <Typography sx={styles.Typography}> Av. Padre Leopoldo Brentano, 110, Porto Alegre - RS, 90250-590 </Typography>
            </Box>
        </Box>
  	);
}
