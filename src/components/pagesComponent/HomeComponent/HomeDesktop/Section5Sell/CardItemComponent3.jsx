import { Box, styled, useTheme, Button, Typography, CardMedia } from '@mui/material';

import vector56 from '/src/images/vector/vector56.svg';
import vector57 from '/src/images/vector/vector57.svg';

import vectorprojectblue01 from '/src/images/vector/vectorprojectblue01.svg';

function CardItemComponent3() {
    const theme = useTheme();

    return (
        <div>
            <CardItemComponent3Styled sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}>ASHTON ASOKE RAMA9</Typography>
                <Button variant="contained" color="success" sx={{ boxShadow: 'none' }}>
                    <Typography variant="button">New</Typography>
                </Button>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <CardMedia component="img" src={vector56} sx={{ width: 16, mr: 0.5 }} />
                    <Typography sx={{ mr: 1.5 }}>อโศก - พระราม 9</Typography>
                    <CardMedia component="img" src={vector57} sx={{ width: 16, mr: 0.5 }} />
                    <Typography>ใกล้รถไฟฟ้า 3 สถานี</Typography>
                </Box>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <ButtonHomeStyled sx={{ mr: 1 }}>
                        <CardMedia component="img" src={vectorprojectblue01} sx={{ width: '14px', mr: 0.3 }} />
                        <Typography sx={{ fontWeight: 700, fontSize: 10, color: '#2F80ED' }}>บ้านเดี่ยว</Typography>
                    </ButtonHomeStyled>
                    <ButtonHomeStyled>
                        <CardMedia component="img" src={vectorprojectblue01} sx={{ width: '14px', mr: 0.3 }} />
                        <Typography sx={{ fontWeight: 700, fontSize: 10, color: '#2F80ED' }}>บ้านแฝด</Typography>
                    </ButtonHomeStyled>
                </Box>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ lineHeight: '27px', fontWeight: 700, fontSize: '20px' }}>฿ 5,000,000 - 10,000,000</Typography>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <ButtonHomeStyled sx={{ width: 'auto', border: '1px solid #EB5757', paddingX: 2 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 10, color: '#EB5757' }}>ลดสูงสุด 50%</Typography>
                </ButtonHomeStyled>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ fontSize: 12, lineHeight: '15px' }}>จำนวนคงเหลือ : 200 /2,000</Typography>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ fontSize: 12, lineHeight: '15px' }}>แบบแปรน : 4 type</Typography>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ fontSize: 12, lineHeight: '15px' }}>00 Share | 00 View</Typography>
            </CardItemComponent3Styled>
        </div>
    );
}

export default CardItemComponent3;

const CardItemComponent3Styled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '288.44px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1)
}));

const ButtonHomeStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '77px',
    height: '20',
    background: '#ffffff',
    border: '1px solid #2F80ED',
    borderRadius: '12px'
}));
