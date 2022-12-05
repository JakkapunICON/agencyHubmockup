import { Box, CardMedia, styled, Typography, Button, useTheme } from '@mui/material';

import CardItemComponent3 from './CardItemComponent3';
import CardItemComponent4 from './CardItemComponent4';

function CardAllReadyToSale() {
    const theme = useTheme();

    return (
        <CardItemComponentStyled>
            <CardItemComponent1>
                <CardMedia
                    component="img"
                    src="/src/images/content/icon56.png"
                    sx={{ position: 'absolute', left: '15px', top: '0px', width: '68.37px' }}
                />
                <CardMedia component="img" src="/src/images/content/icon57.png" sx={{ width: '40px' }} />
            </CardItemComponent1>
            <CardItemComponent2>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography>00 Share </Typography>
                        <Typography>| 00 in Stock </Typography>
                        <Typography>| 00 View</Typography>
                    </Box>
                    <Box>
                        <Typography>ASHTON ASOKE RAMA9</Typography>
                    </Box>
                </Box>
                <CardMedia component="img" src="/src/images/vector/vectoricon2807.svg" sx={{ width: '48px' }} />
            </CardItemComponent2>
            <br />
            <CardItemComponent3 />
            <CardItemComponent4 />
        </CardItemComponentStyled>
    );
}

export default CardAllReadyToSale;

const CardItemComponentStyled = styled(Box)(({ theme }) => ({
    display: 'block',
    minWidth: 320,
    height: 550,
    background: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: '12px'
}));

const CardItemComponent1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '288px',
    height: '219px',
    background: '#EEF2F4',
    borderRadius: '12px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1.5)
}));

const CardItemComponent2 = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '288px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1)
}));
