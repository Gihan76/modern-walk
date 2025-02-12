import { AppBar, Box, Link } from '@mui/material'
import React from 'react'
import { APP_NAME } from '../config/Constants'
import { ROOT } from '../navigation/Routes'

const styles = {
    appBar: {
        position: 'static',
        alignItems: 'center',
    },
    linkTitle: {
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '10px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '30px',
        width: "auto"
    }
}

export const Header = () => {
    return (
        <Box>
            <AppBar color='white' sx={styles.appBar}>
                <Link href={ROOT} sx={styles.linkTitle}>
                    {APP_NAME}
                </Link>
            </AppBar>
        </Box>
    )
}
