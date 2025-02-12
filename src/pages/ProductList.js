import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CATEGORY_END_POINT, MENS_CLOTHING, WOMENS_CLOTHING } from '../config/Constants';
import { Container, Grid2, Typography } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { fetchProducts } from '../services/ProductServices';
import { MENS_CLOTHING_ROOT, WOMENS_CLOTHING_ROOT } from '../navigation/Routes';

const styles = {
    category: {
        fontWeight: 700,
        marginBottom: '25px',
        marginTop: '25px',
        marginLeft: '100px'
    },
    grid: {
        margin: "0 0 20px",
        justifyContent: "center"
    }
};

export const ProductList = () => {
    const { pathname } = useLocation();
    const [products, setProducts] = useState([]);

    // fetch products data for each category
    useEffect(() => {
        (async () => {
            const response = await fetchProducts(pathname === MENS_CLOTHING_ROOT ? CATEGORY_END_POINT(MENS_CLOTHING?.toLowerCase()) : pathname === WOMENS_CLOTHING_ROOT ? CATEGORY_END_POINT(WOMENS_CLOTHING?.toLowerCase()) : '', '?sort=desc');
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
    }, []);

    return (
        <Container maxWidth="xl">
            <Typography variant='h6' sx={styles.category}>
                {pathname === MENS_CLOTHING_ROOT ? MENS_CLOTHING : WOMENS_CLOTHING}
            </Typography>
            <Grid2 container spacing={3} sx={styles.grid}>
                {products?.map((p, i) => (
                    <Grid2 key={i} xs={12} sm={6} md={3}>
                        <ProductCard
                            title={p.title}
                            imageURL={p.image}
                            price={p.price}
                            description={p.description}
                            category={p.category}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    )
}
