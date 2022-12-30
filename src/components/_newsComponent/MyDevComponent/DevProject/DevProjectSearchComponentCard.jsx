import { CardMedia, AppBar, Box, InputBase, Toolbar, Typography, styled, useTheme, Button, Grid } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

function DevProjectSearchComponentCard() {
    return (
        <CardStyled component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
            <CardMedia component="img" src="/src/images/dev/home2.png" sx={{ width: '50px', mr: 2 }} />
            <Typography>xxxxxxxxxxxxx</Typography>
        </CardStyled>
    );
}

export default DevProjectSearchComponentCard;

const CardStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '286px',
    height: '105px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    background: '#FFFFFF',
    '&:hover': {
        transform: 'scale(1.1)'
    }
}));
