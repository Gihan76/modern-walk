import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const styles = {
    button: {
        color: "white",
        padding: "50px",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "620px",
        textTransform: "none",
    }
};

export const CategoryButton = ({ label = "", color = "", route = "" }) => {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate(route)}
            sx={{ ...styles.button, backgroundColor: color }}
        >
            {label}
        </Button>
    )
}
