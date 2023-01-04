import { Box, CardMedia, styled, Typography, Button, useTheme } from '@mui/material';
import CardItemComponent3 from './CardItemComponent3';
import CardItemComponent4 from './CardItemComponent4';

import icon56 from '/src/images/content/icon56.png';
import icon57 from '/src/images/content/icon57.png';

function CardSell() {
    const theme = useTheme();

    return (
        <CardItemComponentStyled>
            <CardItemComponent1>
                <CardMedia component="img" src={icon56} sx={{ position: 'absolute', left: '15px', top: '0px', width: '68.37px' }} />
                <CardMedia component="img" src={icon57} sx={{ width: '40px' }} />
            </CardItemComponent1>
            <CardItemComponent2>
                <CardItemComponent2INSIDE>
                    <CardMedia component="img" src={icon57} sx={{ width: '30.56px' }} />
                </CardItemComponent2INSIDE>
                <CardItemComponent2INSIDE>
                    <CardMedia component="img" src={icon57} sx={{ width: '30.56px' }} />
                </CardItemComponent2INSIDE>
                <CardItemComponent2INSIDE>
                    <CardMedia component="img" src={icon57} sx={{ width: '30.56px' }} />
                </CardItemComponent2INSIDE>
                <CardItemComponent2INSIDE sx={{ mr: 0 }}>
                    <CardMedia component="img" src={icon57} sx={{ width: '30.56px' }} />
                </CardItemComponent2INSIDE>
            </CardItemComponent2>
            <br />
            <CardItemComponent3 />
            <CardItemComponent4 />
        </CardItemComponentStyled>
    );
}

export default CardSell;

const CardItemComponentStyled = styled(Box)(({ theme }) => ({
    display: 'block',
    minWidth: 320,
    height: 566,
    background: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: '12px'
}));

const CardItemComponent1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '288.44px',
    height: '160.24px',
    background: '#EEF2F4',
    borderRadius: '12px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1.5)
}));

const CardItemComponent2 = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '288.44px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1)
}));
const CardItemComponent2INSIDE = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '66.37px',
    height: '54.48px',
    background: '#EEF2F4',
    borderRadius: '12px',
    marginRight: theme.spacing(1)
}));
