import { Box, CardMedia, Grid, styled, Typography, useTheme } from '@mui/material';

import DevProjectCardWhite from './DevProjectCardWhite';
import DevProjectCardPrimary from './DevProjectCardPrimary';

function DevProject() {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'start', padding: theme.spacing(14) }}>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <DevProjectCardPrimary />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
                <Grid item xs={3}>
                    <DevProjectCardWhite />
                </Grid>
            </Grid>
        </Box>
    );
}

export default DevProject;
