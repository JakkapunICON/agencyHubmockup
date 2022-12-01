import { Typography, Grid, Box, Card, CardContent, Button, Divider, useTheme, styled, CardMedia } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// import project
import CardTitle from './Section1Main/CardTitle';
import CardContentImg from './Section1Main/CardContentImg';
import CardMyMenu from './Section1Main/CardMyMenu';
import CardNotification from './Section1Main/CardNotification';
import TypographyMyDeveloper from './Section2MyDeveloper/TypographyMyDeveloper';
import ItemDev from './Section2MyDeveloper/ItemDev';
import TypographyMyAgency from './Section3MyAgency/TypographyMyAgency';
import ItemDevMyAgency from './Section3MyAgency/ItemDevMyAgency';

import Section4Project from './Section4Project';

import user1 from '/src/images/content/user1.png';

// ==============================|| HomeDesktop ||============================== //

function HomeDesktop() {
    const theme = useTheme();

    return (
        <>
            <BoxImgComponentStyled component="section">
                <Box sx={{ width: 888 }}>
                    <CardTitle />
                    <Grid container spacing={1.2} sx={{ display: 'flex', justifyContent: 'center', paddingTop: theme.spacing(2) }}>
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
                <Box sx={{ width: 447, marginLeft: theme.spacing(3) }}>
                    <Card variant="outlined" sx={{ borderRadius: 5, minHeight: 763 }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', height: 128 }}>
                            <Box sx={{ display: 'flex', padding: theme.spacing(2) }}>
                                <img src={user1} alt="user1" width={82} height={82} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: theme.spacing(5) }}>
                                    <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '33px' }}>xxxxxx xxxxxx</Typography>
                                    <Box sx={{ display: 'flex', marginTop: theme.spacing(0.8) }}>
                                        <Typography variant="text16" sx={{ marginRight: theme.spacing(3) }}>
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
            <br />
            <BoxMyDeveloperComponentStyled component="section">
                <Box sx={{ marginTop: theme.spacing(10), marginLeft: theme.spacing(15), width: 550 }}>
                    <TypographyMyDeveloper />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: theme.spacing(10), marginLeft: theme.spacing(15) }}>
                    <ItemDev />
                    <ItemDev />
                    <ItemDev />
                    <ItemDev />
                    <ItemDev />
                    <ItemDev />
                    <ItemDev />
                    <ItemDev />
                </Box>
            </BoxMyDeveloperComponentStyled>
            <Box sx={{ height: '510px', background: '#EEF2F4' }}>
                <BoxMyAgencyComponentStyled>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: theme.spacing(10), marginLeft: theme.spacing(15) }}>
                        <ItemDevMyAgency />
                        <ItemDevMyAgency />
                        <ItemDevMyAgency />
                        <ItemDevMyAgency />
                        <ItemDevMyAgency />
                        <ItemDevMyAgency />
                        <ItemDevMyAgency />
                    </Box>
                    <Box sx={{ marginTop: theme.spacing(10), marginLeft: theme.spacing(15), width: 550 }}>
                        <TypographyMyAgency />
                    </Box>
                </BoxMyAgencyComponentStyled>
            </Box>
            <Section4Project />
        </>
    );
}

export default HomeDesktop;

const BoxImgComponentStyled = styled(Box)(() => ({
    // backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    minHeight: '788px',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '20px'
}));

const CardAllMyMenu = styled(Box)(({ theme }) => ({
    // backgroundColor: 'gray',
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

const BoxMyDeveloperComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    height: '393px',
    background: 'linear-gradient(180deg, #0B1D26 0%, #4F6874 100%)'
}));

const BoxMyAgencyComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    height: '381px',
    background: '#EEF2F4'
}));
