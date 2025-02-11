import React, { useEffect, useState } from 'react'
import { FLASH_SALE, MENS_CLOTHING, PRODUCTS_END_POINT, WOMENS_CLOTHING } from '../config/Constants';
import { fetchProducts } from '../services/ProductServices';
import { Grid2, Typography } from '@mui/material';
import { ProductCard } from '../components/ProductCard';

const styles = {
    flashSale: {
        fontWeight: 'bold',
        marginBottom: '25px',
        marginTop: '25px',
        marginLeft: '125px'
    },
    grid: {
        margin: "0 0 20px 0",
        justifyContent: "center"
    }
};

export const LandingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const categories = [MENS_CLOTHING?.toLowerCase(), WOMENS_CLOTHING?.toLowerCase()];
            const response = await fetchProducts(PRODUCTS_END_POINT, '?sort=desc', categories);
            const productData = response?.map((d) => {
                return {
                    id: d?.id,
                    title: d?.title,
                    image: d?.image,
                    price: d?.price,
                    description: d?.description?.substring(0, 90),
                    category: d?.category,
                }
            })
            setProducts(productData);
        })();
    }, [])
    

    return (
        <>
            <Typography variant='h6' sx={styles.flashSale}>
                {FLASH_SALE}
            </Typography>
            <Grid2 container spacing={3} sx={styles.grid}>
                {products.map((p) => (
                    <Grid2 item xs={12} sm={6} md={3}>
                        <ProductCard
                            key={p.id}
                            title={p.title}
                            imageURL={p.image}
                            price={p.price}
                            description={p.description}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </>
    )
}