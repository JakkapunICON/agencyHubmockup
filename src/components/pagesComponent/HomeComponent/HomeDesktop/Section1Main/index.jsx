import { Typography, Grid, Box, Card, CardContent, Button, Divider, useTheme, styled, CardMedia } from '@mui/material';

import CardTitle from './CardTitle';
import CardContentImg from './CardContentImg';
import CardMyMenu from './CardMyMenu';
import CardNotification from './CardNotification';

import user1 from '/src/images/content/user1.png';

function Section1Main() {
    const theme = useTheme();
    return (
        <BoxImgComponentStyled component="section">
            <Box sx={{ width: 888 }}>
                <CardTitle />
                <Grid container spacing={1.2} sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                    <Grid item xs={4}>
                        <CardContentImg />
                    </Grid>
                    <Grid item xs={4}>
                        <CardContentImg />
                    </Grid>
                    <Grid item xs={4}>
                        <CardContentImg />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: 447, ml: 3 }}>
                <Card variant="outlined" sx={{ borderRadius: 5, minHeight: 763 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', height: 128 }}>
                        <Box sx={{ display: 'flex', p: 2 }}>
                            <img src={user1} alt="user1" width={82} height={82} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: 5 }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '33px' }}>xxxxxx xxxxxx</Typography>
                                <Box sx={{ display: 'flex', mt: theme.spacing(0.8) }}>
                                    <Typography variant="text16" sx={{ mr: 3 }}>
                                        ID:9852122
                                    </Typography>
                                    <Button variant="contained" size="small" color="primary">
                                        <Typography variant="button">Agent</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                    <Divider />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: 633 }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '33px' }}>My menu</Typography>
                        <CardAllMyMenu>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CardMyMenu imgSrc={'/src/images/vector/vector1.svg'} typography="My Profile" />
                                <CardMyMenu imgSrc={'/src/images/vector/vector2.svg'} typography="Change Password" />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CardMyMenu imgSrc={'/src/images/vector/vector3.svg'} typography="My Agency" />
                                <CardMyMenu imgSrc={'/src/images/vector/vector4.svg'} typography="My Customer" />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CardMyMenu imgSrc={'/src/images/vector/vector5.svg'} typography="Favorite Unite" />
                                <CardMyMenu imgSrc={'/src/images/vector/vector6.svg'} typography="History" />
                            </Box>
                        </CardAllMyMenu>
                        <Typography sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '33px' }}>Notification</Typography>
                        <CardAllNotification>
                            <CardNotification typography1="xxxxxxxxxxxx" typography2="xxxxxxxxxxxxxxxxxxx" />
                            <CardNotification typography1="xxxxxxxxxxxx" typography2="xxxxxxxxxxxxxxxxxxx" />
                            <CardNotification typography1="xxxxxxxxxxxx" typography2="xxxxxxxxxxxxxxxxxxx" />
                            <CardNotification typography1="xxxxxxxxxxxx" typography2="xxxxxxxxxxxxxxxxxxx" />
                        </CardAllNotification>
                    </CardContent>
                </Card>
            </Box>
        </BoxImgComponentStyled>
    );
}

export default Section1Main;

const BoxImgComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minHeight: '788px',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '20px',
    marginTop: theme.spacing(1)
}));

const CardAllMyMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1.2)
}));

const CardAllNotification = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1.2)
}));
