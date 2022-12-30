import { Box, CardMedia, Grid, styled, Typography, useMediaQuery, useTheme } from '@mui/material';

import DevProjectCardWhite from './DevProjectCardWhite';
import DevProjectCardPrimary from './DevProjectCardPrimary';

function DevProject() {
    const theme = useTheme();
    const matches800 = useMediaQuery('(max-width:800px)');

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 14, paddingX: matches800 === false ? 14 : 2 }}>
            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item>
                    <DevProjectCardPrimary />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item>
                    <DevProjectCardWhite />
                </Grid>
            </Grid>
        </Box>
    );
}

export default DevProject;
