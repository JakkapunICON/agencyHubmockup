import { CardMedia, AppBar, Box, InputBase, Toolbar, Typography, styled, useTheme, Button, Grid } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

function DevloperCard() {
    return (
        <CardStyled component={RouterLink} to="/developer/apply">
            <CardMedia component="img" src="/src/images/developer/developer01.png" sx={{ width: '108.28px', mb: 1 }} />
            <Typography>developer 01</Typography>
        </CardStyled>
    );
}

export default DevloperCard;

const CardStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
        transform: 'scale(1.1)'
    }
    // width: '286px',
    // height: '105px',
    // boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    // borderRadius: '20px',
    // background: '#FFFFFF'
}));
