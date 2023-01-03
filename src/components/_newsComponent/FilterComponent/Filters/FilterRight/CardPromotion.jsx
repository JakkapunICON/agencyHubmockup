import { Box, Button, Grid, Typography, useTheme, styled, CardMedia } from '@mui/material';
import CardItemComponent3 from './CardItemComponent3';

function CardPromotion({ content }) {
    const theme = useTheme();

    return (
        <CardPromotionStyled>
            <CardPromotionHeaderStyled content={content}>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: '20px',
                        lineHeight: '27px',
                        textTransform: 'uppercase',
                        color: theme.palette.white.main
                    }}
                >
                    {content === 'promotion' ? 'Flash Promotion | ข้อเสนอเวลาจำกัด' : 'Hot Sale | ลดแรงแซงทางโค้ง'}
                </Typography>
                <Typography sx={{ color: '#6D7884', fontWeight: 70, fontSize: '24px' }}>22:30:00</Typography>
            </CardPromotionHeaderStyled>
            <CardPromotionContentStyled>
                <CardPromotionContentLeftStyled>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardItemComponent1>
                            <CardMedia
                                component="img"
                                src="/src/images/content/icon56.png"
                                sx={{ position: 'absolute', left: '15px', top: '0px', width: '68.37px' }}
                            />
                            <CardMedia component="img" src="/src/images/content/icon57.png" sx={{ width: '40px' }} />
                        </CardItemComponent1>
                        <CardItemComponent2>
                            <CardItemComponent2INSIDE>
                                <CardMedia component="img" src="/src/images/content/icon57.png" sx={{ width: '30.56px' }} />
                            </CardItemComponent2INSIDE>
                            <CardItemComponent2INSIDE>
                                <CardMedia component="img" src="/src/images/content/icon57.png" sx={{ width: '30.56px' }} />
                            </CardItemComponent2INSIDE>
                            <CardItemComponent2INSIDE>
                                <CardMedia component="img" src="/src/images/content/icon57.png" sx={{ width: '30.56px' }} />
                            </CardItemComponent2INSIDE>
                            <CardItemComponent2INSIDE sx={{ mr: 0 }}>
                                <CardMedia component="img" src="/src/images/content/icon57.png" sx={{ width: '30.56px' }} />
                            </CardItemComponent2INSIDE>
                        </CardItemComponent2>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardItemComponent3 />
                    </Box>
                </CardPromotionContentLeftStyled>
                <CardPromotionContentRightStyled>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ color: '#2F80ED' }}>00 Share |</Typography>
                            <Typography sx={{ color: '#961619' }}> 00 View</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: 1 }}>
                            <Button variant="contained" sx={{ background: '#FF75A7', width: '161px', height: '22px' }}>
                                <Typography sx={{ color: '#FFFFFF' }}>Flash Promotion</Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ border: '2px solid ', borderRadius: '5px', width: '131px', height: '37px', mb: 1 }}
                        >
                            <Typography variant="text16" sx={{ fontWeight: 600 }}>
                                ดูรายละเอียด
                            </Typography>
                        </Button>
                        <Button variant="contained" color="primary" sx={{ borderRadius: '5px', width: '131px', height: '35px' }}>
                            <Typography variant="text16" sx={{ fontWeight: 600 }}>
                                จอง
                            </Typography>
                        </Button>
                    </Box>
                </CardPromotionContentRightStyled>
            </CardPromotionContentStyled>
        </CardPromotionStyled>
    );
}

export default CardPromotion;

const CardPromotionStyled = styled(Box)(({ theme }) => ({
    width: '901px',
    // height: '316px',
    border: '1px solid #E0E0E0',
    borderRadius: '20px',
    marginBottom: theme.spacing(2)
}));

const CardPromotionHeaderStyled = styled(Box)(({ theme, content }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: content === 'promotion' ? '#FF75A7' : '#F17100',
    height: '55px',
    width: '901px',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
}));
const CardPromotionContentStyled = styled(Box)(({ theme }) => ({
    width: '901px',
    height: '239px',
    display: 'flex',
    justifyContent: 'flex-start'
}));
const CardPromotionContentLeftStyled = styled(Box)(({ theme }) => ({
    width: '650px',
    height: '239px',
    borderRight: '1px solid #E0E0E0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
    // flexDirection: 'column'
}));

const CardItemComponent1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '288.44px',
    height: '160.24px',
    background: '#EEF2F4',
    borderRadius: '12px'
}));

const CardItemComponent2 = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '288.44px',
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

const CardPromotionContentRightStyled = styled(Box)(({ theme }) => ({
    width: '250px',
    height: '239px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'column',
    padding: theme.spacing(2)
}));
