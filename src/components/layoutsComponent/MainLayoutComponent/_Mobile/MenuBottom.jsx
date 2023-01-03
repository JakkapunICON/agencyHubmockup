import { Box, Toolbar, Typography, IconButton, AppBar, styled, Grid } from '@mui/material';

// project import
import MenuBottomItem from './MenuBottomItem';

import setting from '/src/images/mobilemenu/setting.png';
import emarket from '/src/images/mobilemenu/emarket.png';
import appointment from '/src/images/mobilemenu/appointment.png';
import menu from '/src/images/mobilemenu/menu.png';

function MenuBottom() {
    return (
        <MenuBottomBar>
            <Grid container spacing={0}>
                <Grid item xs>
                    <MenuBottomItem src={setting} alt="setting" text="Setting" />
                </Grid>
                <Grid item xs>
                    <MenuBottomItem src={emarket} alt="emarket" text="E-Market" />
                </Grid>
                <Grid item xs>
                    <MenuBottomItem src={appointment} alt="appointment" text="นัดหมาย" />
                </Grid>
                <Grid item xs>
                    <MenuBottomItem src={menu} alt="menu" text="Menu" />
                </Grid>
            </Grid>
        </MenuBottomBar>
    );
}

export default MenuBottom;

export const MenuBottomBar = styled('div')(() => ({
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '80px',
    boxShadow: '0px -5px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px 20px 0 0 '
}));
