import { AppBar, Box, Link } from '@mui/material'
import React from 'react'
import { APP_NAME } from '../config/Constants'
import { ROOT } from '../navigation/Routes'

const styles = {
    appBar: {
        position: 'static',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '10px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '24px',
    }
}

export const Header = () => {
    return (
        <Box>
            <AppBar color='white' sx={styles.appBar}>
                <Link href={ROOT} sx={styles.title}>
                   {APP_NAME} 
                </Link>
            </AppBar>
        </Box>
    )
}
