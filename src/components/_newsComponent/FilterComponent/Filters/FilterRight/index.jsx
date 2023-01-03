import { Box, Button, Grid, Typography, useTheme, styled, CardMedia } from '@mui/material';

import CardItemComponent3 from './CardItemComponent3';
import CardPromotion from './CardPromotion';

function FilterRight() {
    const theme = useTheme();

    return (
        <FilterRightStyled>
            <FilterRightHeaderStyled>
                <Typography sx={{ fontWeight: 700, fontSize: '24px', lineHeight: '33px', mr: 4, color: theme.palette.white.main }}>Sort</Typography>
                <CardButtonStyled sx={{ mr: 3 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: '19px', textTransform: 'uppercase' }}>HOT SALE</Typography>
                </CardButtonStyled>
                <CardButtonStyled sx={{ mr: 3 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: '19px', textTransform: 'uppercase' }}>ทั้งหมด</Typography>
                </CardButtonStyled>
                <CardButtonStyled sx={{ mr: 3 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: '19px', textTransform: 'uppercase' }}>จากราคาต่ำสุด</Typography>
                </CardButtonStyled>
                <CardButtonStyled sx={{ mr: 3 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: '19px', textTransform: 'uppercase' }}>หมวดสังหา</Typography>
                </CardButtonStyled>
                <CardButtonStyled sx={{ mr: 3 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: '19px', textTransform: 'uppercase' }}>ซีเคร็ทดีล</Typography>
                </CardButtonStyled>
            </FilterRightHeaderStyled>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
                <CardPromotion content="promotion" />
                <CardPromotion content="hotsale" />
                <CardPromotion content="hotsale" />
                <CardPromotion content="hotsale" />
            </Box>
        </FilterRightStyled>
    );
}

export default FilterRight;

const FilterRightStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '946px',
    height: '1595px',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px'
}));

const FilterRightHeaderStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0B1D26',
    height: '85px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
}));

const CardButtonStyled = styled(Button)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '118px',
    height: '45px',
    border: '1px solid #0B1D26',
    borderRadius: '10px',
    background: theme.palette.white.main,
    ':hover': {
        background: theme.palette.secondary.main,
        transform: 'scale(1.2)'
    }
}));
