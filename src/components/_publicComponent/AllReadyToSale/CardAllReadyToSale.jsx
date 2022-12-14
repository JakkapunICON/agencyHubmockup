import { Box, CardMedia, styled, Typography, Button, useTheme } from '@mui/material';

import CardItemComponent3 from './CardItemComponent3';
import CardItemComponent4 from './CardItemComponent4';

import icon56 from '/src/images/content/icon56.png';
import icon57 from '/src/images/content/icon57.png';
import vectoricon2807 from '/src/images/vector/vectoricon2807.svg';

function CardAllReadyToSale() {
    const theme = useTheme();

    return (
        <CardItemComponentStyled>
            <CardItemComponent1>
                <CardMedia component="img" src={icon56} sx={{ position: 'absolute', left: '15px', top: '0px', width: '68.37px' }} />
                <CardMedia component="img" src={icon57} sx={{ width: '40px' }} />
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
                <CardMedia component="img" src={vectoricon2807} sx={{ width: '48px' }} />
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
    borderRadius: '12px',
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(1.05)'
    }
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
