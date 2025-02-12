import React, { useEffect, useMemo, useState } from 'react'
import { CATEGORIES, FLASH_SALE, MENS_CLOTHING, PRODUCTS_END_POINT, WOMENS_CLOTHING } from '../config/Constants';
import { fetchProducts } from '../services/ProductServices';
import { Container, Grid2, Typography } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { MENS_CLOTHING_ROOT, WOMENS_CLOTHING_ROOT } from '../navigation/Routes';
import { CategoryButton } from '../components/CategoryButton';

const styles = {
    flashSale: {
        fontWeight: 'bold',
        marginBottom: '25px',
        marginTop: '25px',
        marginLeft: '100px'
    },
    grid: {
        margin: "0 0 20px 0",
        justifyContent: "center"
    }
};

export const LandingPage = () => {
    const [products, setProducts] = useState([]);
    const categories = [MENS_CLOTHING?.toLowerCase(), WOMENS_CLOTHING?.toLowerCase()];
    const categoryTiles = [
        {
            name: MENS_CLOTHING,
            color: "#2DD4BF",
            route: MENS_CLOTHING_ROOT
        },
        {
            name: WOMENS_CLOTHING,
            color: "#FF5E84",
            route: WOMENS_CLOTHING_ROOT
        }
    ];

    // fetch products data
    useEffect(() => {
        (async () => {
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
    }, []);

    /**
     * @description pick latest items from each category to display in the flash sale
     * @param {array} products 
     * @param {array} categories 
     * @param {number} count 
     * @returns array
     */
    const getItemsForFlashSale = (products= [], categories= [], count= 0) => {
        let flashSaleProducts = [];
        categories?.forEach((c) => {
            const items = products?.filter((p) => p?.category === c).splice(0, count)
            flashSaleProducts = [...flashSaleProducts, items]
        });
        return flashSaleProducts.flat();
    };

    const flashSaleItems = useMemo(() => {
        return getItemsForFlashSale(products, categories, 2);
    }, [products]);

    return (
        <Container maxWidth="xl">
            <Typography variant='h6' sx={styles.flashSale}>
                {FLASH_SALE}
            </Typography>
            <Grid2 container spacing={3} sx={styles.grid}>
                {flashSaleItems?.map((p, i) => (
                    <Grid2 key={i} xs={12} sm={6} md={4} lg={3}>
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

            <Typography variant='h6' sx={styles.flashSale}>
                {CATEGORIES}
            </Typography>
            <Grid2 container spacing={3} sx={styles.grid}>
                {categoryTiles.map((c, i) => (
                    <Grid2 key={i} xs={12} sm={6} md={6}>
                        <CategoryButton
                            label={c.name}
                            color={c.color}
                            route={c.route}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    )
}