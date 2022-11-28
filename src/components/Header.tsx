import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography
                    variant="h6"
                >
                    <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>Weather App</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}