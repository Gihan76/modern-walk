import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { MENS_CLOTHING } from '../config/Constants';

const styles = {
    card: {
        maxWidth: 300,
        height: 460,
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        boxShadow: "15px 10px 20px #00000026"
    },
    cardMedia: {
        objectFit: "contain",
        height: 200,
        mt: 2,
        mb: 2
    },
    title: {
        textAlign: "center",
        fontWeight: 700
    },
    titleBox: {
        p: 2,
        textAlign: "center",
        minHeight: 60,
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
        flexDirection: "column",
        borderRadius: "12px 12px"
    },
    price: {
        color: "#0E42FD",
        mb: 1,
        fontWeight: 700
    },
    description: {
        flexGrow: 1,
        color: "#0E0E0E",
        fontWeight: 400
    }
};

export const ProductCard = ({ title, imageURL, price, description, category }) => {
    return (
        <Card sx={styles.card}>
            <Box sx={styles.titleBox}>
                <Typography variant="h6" sx={styles.title}>
                    {title}
                </Typography>
            </Box>
            <CardMedia component="img" image={imageURL} alt={title} sx={styles.cardMedia} />
            <Box sx={{ ...styles.descBox, backgroundColor: category === MENS_CLOTHING?.toLowerCase() ? "#2BD9AF" : "#FF5E84" }}>
                <Typography variant="h5" sx={styles.price}>
                    Rs. {price}
                </Typography>
                <Typography variant="body2" sx={styles.description}>
                    {description}...
                </Typography>
            </Box>
        </Card>
    );
};