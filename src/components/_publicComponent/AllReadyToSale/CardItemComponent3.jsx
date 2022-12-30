import { Box, styled, useTheme, Button, Typography, CardMedia } from '@mui/material';

function CardItemComponent3() {
    const theme = useTheme();

    return (
        <div>
            <CardItemComponent3Styled>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <CardMedia component="img" src="/src/images/vector/vector56.svg" sx={{ width: 16, mr: 1.5 }} />
                    <Typography>อโศก - พระราม 9</Typography>
                </Box>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Typography sx={{ fontSize: '12px', marginRight: theme.spacing(1) }}>฿ 10,000,000</Typography>
                    <ButtonHomeStyled sx={{ width: 'auto', border: '1px solid #EB5757', paddingX: theme.spacing(2) }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 10, color: '#EB5757' }}>-50%</Typography>
                    </ButtonHomeStyled>
                </Box>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ lineHeight: '27px', fontWeight: 700, fontSize: '20px' }}>฿ 5,000,000</Typography>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ fontSize: 12, lineHeight: '15px' }}>แปลง/ห้อง : 000 แบบแปลน:A TYPE</Typography>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ fontSize: 12, lineHeight: '15px' }}>240 ตรม. 4 4</Typography>
            </CardItemComponent3Styled>
            <CardItemComponent3Styled>
                <Typography sx={{ fontSize: 12, lineHeight: '15px' }}>Agency XXXXXXX</Typography>
            </CardItemComponent3Styled>
        </div>
    );
}

export default CardItemComponent3;

const CardItemComponent3Styled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '288px',
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
