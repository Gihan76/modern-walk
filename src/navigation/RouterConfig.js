import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { ROOT } from './Routes'

export const RouterConfig = () => {
    return (
        <Routes>
            {/* page routes */}
            <Route path={ROOT} element={<LandingPage />} />
        </Routes>
    )
}
