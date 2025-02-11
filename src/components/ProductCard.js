import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { MENS_CLOTHING } from '../config/Constants';

const styles = {
    card: {
        maxWidth: 300,
        height: 460,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3
    },
    cardMedia: {
        objectFit: "contain",
        height: 200,
        mt: 2,
        mb: 2
    },
    title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    titleBox: {
        p: 2,
        textAlign: "center",
        minHeight: 60,
        maxHeight: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    descBox: {
        color: "black",
        textAlign: "center",
        p: 2,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
    },
    price: {
        color: "#0E42FD",
        mb: 1,
        fontWeight: "bold"
    },
    description: {
        flexGrow: 1,
        color: "#0E0E0E"
    }
}

export const ProductCard = ({ title, imageURL, price, description, category }) => {
    return (
        <Card sx={styles.card}>
            <Box sx={styles.titleBox}>
                <Typography variant="h6" sx={styles.title}>
                    {title}
                </Typography> 
            </Box>
            <CardMedia component="img" image={imageURL} alt={title} sx={styles.cardMedia} />
            <Box sx={{...styles.descBox, backgroundColor: category === MENS_CLOTHING?.toLowerCase() ? "#2DD4BF" : "#FF5E84"}}>
                <Typography variant="h5" sx={styles.price}>
                    Rs. {price}
                </Typography>
                <Typography variant="body2" sx={styles.description}>
                    {description}...
                </Typography>
            </Box>
        </Card>
    )
};