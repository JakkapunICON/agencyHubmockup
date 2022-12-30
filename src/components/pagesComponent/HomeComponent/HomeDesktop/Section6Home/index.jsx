import { Box, CardMedia, Grid, styled, Typography, useTheme } from '@mui/material';
import AllAgency from './AllAgency';
import AllDeverloper from './ALLDeverloper';

function Section6Home() {
    const theme = useTheme();

    return (
        <>
            <BoxSection6ComponentStyled>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item>
                        <AllAgency />
                    </Grid>
                    <Grid item>
                        <AllDeverloper />
                    </Grid>
                </Grid>
            </BoxSection6ComponentStyled>
        </>
    );
}

export default Section6Home;

const BoxSection6ComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 8, 4, 8),
    color: theme.palette.primary.main
}));
