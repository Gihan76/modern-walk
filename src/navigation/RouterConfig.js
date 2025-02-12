import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { MENS_CLOTHING_ROOT, ROOT, WOMENS_CLOTHING_ROOT } from './Routes'
import { ProductList } from '../pages/ProductList'

export const RouterConfig = () => {
    return (
        <Routes>
            
            {/* page routes */}
            <Route path={ROOT} element={<LandingPage />} />
            <Route path={MENS_CLOTHING_ROOT} element={<ProductList />} />
            <Route path={WOMENS_CLOTHING_ROOT} element={<ProductList />} />

        </Routes>
    )
}
