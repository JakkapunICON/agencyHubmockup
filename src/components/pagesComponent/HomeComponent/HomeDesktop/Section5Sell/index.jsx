import { Box, styled, Typography, Button, useTheme } from '@mui/material';
import CardSell from './CardSell';

function Section5Sell() {
    const theme = useTheme();

    return (
        <BoxSellComponentStyled>
            <BoxSellComponentINSIDEStyled>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: theme.spacing(4) }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '32px', lineHeight: '44px' }}>โครงการพร้อมขาย</Typography>
                    <Button variant="contained" color="secondary">
                        See More
                    </Button>
                </Box>
                <br />
                <br />
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Box sx={{ marginRight: theme.spacing(1) }}>
                        <CardSell />
                    </Box>
                    <Box sx={{ marginRight: theme.spacing(1) }}>
                        <CardSell />
                    </Box>
                    <Box sx={{ marginRight: theme.spacing(1) }}>
                        <CardSell />
                    </Box>
                    <Box sx={{ marginRight: theme.spacing(1) }}>
                        <CardSell />
                    </Box>
                </Box>
            </BoxSellComponentINSIDEStyled>
        </BoxSellComponentStyled>
    );
}

export default Section5Sell;

const BoxSellComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    // background: 'blue',
    color: theme.palette.primary.main
}));

const BoxSellComponentINSIDEStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(6)
    // background: '#EEF2F4'
}));
