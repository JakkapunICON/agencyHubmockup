import { Box, useTheme, styled, Button, Typography } from '@mui/material';

function CardItemComponent4() {
    return (
        <CardItemComponent4Styled sx={{ ml: -0.1, mt: 2.6 }}>
            <CardItemComponent4INSIDEStyled>
                <Button sx={{ width: '140px', height: '42.9px', background: '#FFFFFF', border: '2px solid #961619', borderRadius: '12px' }}>
                    <Typography sx={{ color: '#0B1D26' }}>ดูรายละเอียด</Typography>
                </Button>
                <Button sx={{ width: '140px', height: '42.9px', background: '#961619', borderRadius: '12px' }}>
                    <Typography>จอง</Typography>
                </Button>
            </CardItemComponent4INSIDEStyled>
        </CardItemComponent4Styled>
    );
}

export default CardItemComponent4;

const CardItemComponent4Styled = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '67px',
    background: '#0B1D26',
    borderRadius: '0 0 12px 12px'
}));

const CardItemComponent4INSIDEStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '288.44px',
    marginLeft: 'auto',
    marginRight: 'auto'
}));
