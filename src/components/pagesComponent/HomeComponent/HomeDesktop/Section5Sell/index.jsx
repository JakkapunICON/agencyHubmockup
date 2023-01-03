import { Box, styled, Typography, Button, useTheme, Grid } from '@mui/material';
import CardSell from './CardSell';

function Section5Sell() {
    const theme = useTheme();

    return (
        <BoxSellComponentStyled>
            <BoxSellComponentINSIDEStyled>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: 4, mb: 6 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '32px', lineHeight: '44px' }}>โครงการพร้อมขาย</Typography>
                    <Button variant="contained" color="secondary">
                        See More
                    </Button>
                </Box>
                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item>
                        <CardSell />
                    </Grid>
                    <Grid item>
                        <CardSell />
                    </Grid>
                    <Grid item>
                        <CardSell />
                    </Grid>
                    <Grid item>
                        <CardSell />
                    </Grid>
                </Grid>
            </BoxSellComponentINSIDEStyled>
        </BoxSellComponentStyled>
    );
}

export default Section5Sell;

const BoxSellComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    color: theme.palette.primary.main
}));

const BoxSellComponentINSIDEStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    // padding: theme.spacing(4)
}));
