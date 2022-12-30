import { Box, CardMedia, Grid, styled, Typography, useTheme } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

function DevProjectCardPrimary() {
    const theme = useTheme();

    return (
        <CardPrimary>
            <Typography sx={{ fontSize: '50px', fontWeight: 700, lineHeight: '68px' }}>Project</Typography>
            <Typography sx={{ fontWeight: 300, marginBottom: theme.spacing(2) }}>Et has minim elitr intellegat. Mea aeternoeleifend </Typography>
            <Typography component={RouterLink} to="/mydev/projectsearch" sx={{ fontSize: '16px', fontWeight: 700, lineHeight: '20px' }}>
                SEE MORE
            </Typography>
        </CardPrimary>
    );
}

export default DevProjectCardPrimary;

const CardPrimary = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '261px',
    height: '193px',
    color: theme.palette.white.main
    // background: 'gray'
}));
