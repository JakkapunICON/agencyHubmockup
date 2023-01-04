import { AppBar, Toolbar, Box, Typography, useTheme, CardMedia } from '@mui/material';
import TypographyFooter from './TypographyFooter';

import iconfooter01 from '/src/images/logo/iconfooter01.png';

import { useLocation } from 'react-router-dom';

function Footer() {
    const theme = useTheme();
    const location = useLocation();

    return (
        <>
            {/* {location.pathname === '/dev' ? (
                <></>
            ) : ( */}
            <AppBar sx={{ background: theme.palette.primary.main }}>
                <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center', minHeight: 75 }}>
                    <CardMedia component="img" src={iconfooter01} sx={{ width: 331 }} />
                </Toolbar>
            </AppBar>
            {/* )} */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: 228,
                    paddingX: theme.spacing(4),
                    boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Box sx={{ marginTop: theme.spacing(4), marginLeft: theme.spacing(5), width: 770 }}>
                    <TypographyFooter />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: theme.spacing(4), marginLeft: theme.spacing(10) }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '22px' }}>Site map</Typography>
                    <Typography>หน้าแรก</Typography>
                    <Typography>โครงการ</Typography>
                    <Typography>เกี่ยวกับเรา</Typography>
                    <Typography>ติดต่อเรา</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: theme.spacing(4), marginLeft: theme.spacing(10) }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '22px' }}>Contact us</Typography>
                    <Typography>+66 089 999 9999</Typography>
                    <Typography>+66 089 999 9999</Typography>
                    <Typography>example@email.com</Typography>
                </Box>
            </Box>
        </>
    );
}

export default Footer;
