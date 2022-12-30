import { CardMedia, AppBar, Box, InputBase, Toolbar, Typography, styled, useTheme, Button, Grid } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

function AgencyCard() {
    return (
        <CardStyled component={RouterLink} to="/agency/apply">
            <CardMedia component="img" src="/src/images/agency/homeAgency.png" sx={{ width: '50px', mr: 2 }} />
            <Typography>Agency xxxxxx</Typography>
        </CardStyled>
    );
}

export default AgencyCard;

const CardStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '286px',
    height: '105px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    background: '#FFFFFF',
    textDecoration: 'none',
    '&:hover': {
        transform: 'scale(1.1)'
    }
}));
