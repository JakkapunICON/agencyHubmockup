import { useState, useEffect } from 'react';

import { Link as RouterLink, useLocation } from 'react-router-dom';

import { Box, Typography, AppBar, Toolbar, Button, CardMedia, useTheme, useMediaQuery, Grid, styled, InputBase } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

// project import
import logoIconframework from '../../../../../images/logo/logoIconframework.png';
import MiniMenu from './MiniMenu';
import SmallMenu from './SmallMenu';

// service import
import { DataServices } from '../../../../../services/DataServices';

// ==============================|| Header ||============================== //

function HeaderMenu() {
    const location = useLocation();
    const theme = useTheme();

    const matches1430 = useMediaQuery('(max-width:1430px)');
    const matches1360 = useMediaQuery('(max-width:1360px)');
    const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const matches1100 = useMediaQuery('(max-width:1100px)');
    const matches1014 = useMediaQuery('(max-width:1014px)');
    const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const menuItem = DataServices.HeaderMenu();
    const menuItem1430 = DataServices.HeaderMenu().slice(0, 4);
    const menuItem1360 = DataServices.HeaderMenu().slice(0, 3);
    const menuItemDownLg = DataServices.HeaderMenu().slice(0, 2);
    const menuItem1100 = DataServices.HeaderMenu().slice(0, 1);

    const [items, setItems] = useState(menuItem);

    useEffect(() => {
        if (matches1430) {
            setItems(menuItem1430);
        }
        if (matches1360) {
            setItems(menuItem1360);
        }
        if (matchesDownLg) {
            setItems(menuItemDownLg);
        }
        if (matches1100) {
            setItems(menuItem1100);
        }

        if (!matches1430 && !matches1360 && !matchesDownLg && !matches1100) {
            setItems(menuItem);
        }
    }, [location.pathname, matches1430, matches1360, matchesDownLg, matches1100]);

    return (
        <AppBar component="nav" sx={{ boxShadow: 0, pr: 2, pl: 4 }}>
            <Toolbar variant="dense">
                <Box component={RouterLink} to="/">
                    <CardMedia component="img" image={logoIconframework} alt="iconframework" sx={{ width: 'auto' }} />
                </Box>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="secondary" sx={{ fontSize: '36px' }} />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="พิมพ์ชื่อโครงการ หรือทำเลที่ต้องการ" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {matchesDownMd ? (
                        <SmallMenu />
                    ) : (
                        <>
                            {items.map((item) => (
                                <ButtonMenu
                                    variant="text16"
                                    active={location.pathname === item.href ? 'true' : 'false'}
                                    component={RouterLink}
                                    to={item.href}
                                    key={item.id}
                                >
                                    <Typography variant="text16" noWrap>
                                        {item.title}
                                    </Typography>
                                </ButtonMenu>
                            ))}
                            {matches1430 ? <MiniMenu /> : <></>}
                            <Button
                                component={RouterLink}
                                to="/agencyHubmockup/addcustomer"
                                variant="contained"
                                size="large"
                                color="success"
                                startIcon={<AddIcon sx={{ marginLeft: '-10px' }} />}
                                sx={{ borderRadius: '3px', marginLeft: '10px' }}
                            >
                                <Typography noWrap variant="text16">
                                    {matches1014 ? 'เพิ่ม และนัด...' : 'เพิ่ม และนัดลูกค้าใหม่'}
                                </Typography>
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderMenu;

// ==============================|| MUI Custom ||============================== //

const bottomStyleAfter = (theme, active) => {
    return {
        content: '""',
        position: 'absolute',
        backgroundColor: theme.palette.secondary.main,
        height: '3px',
        borderRadius: '50px',
        width: active === 'true' ? '100%' : 0,
        left: 0,
        bottom: '-6px',
        transition: '0.25s'
    };
};

const ButtonMenu = styled(Button)(({ theme, active }) => ({
    position: 'relative',
    color: theme.palette.primary.main,
    padding: theme.spacing(0, 1.1),
    // padding: '0 10px',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '26px',
    margin: theme.spacing(0, 0.9),
    '&:after': {
        ...bottomStyleAfter(theme, active)
    },
    '&:hover:after': {
        width: '100%'
    },
    '&:hover': {
        backgroundColor: 'unset'
    }
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.palette.white.main,
    marginRight: theme.spacing(3),
    border: '1.5px solid #E0E0E0',
    marginLeft: theme.spacing(3),
    width: '40%',
    [theme.breakpoints.down('lg')]: {
        width: '438px'
    },
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2, 0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('lg')]: {
        width: '438px'
    },
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        marginLeft: '40px',

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        height: '28px',

        // width: `calc(400px + 1000px)`,
        color: '#9E9E9E',
        fontSize: '16px',
        lineHeight: '22px'
    }
}));
