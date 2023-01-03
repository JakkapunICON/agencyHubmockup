// material-ui
import { styled, Box, Typography, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import {
    Notifications as NotificationsIcon,
    AccountCircle as AccountCircleIcon,
    Settings as SettingsIcon,
    ExpandMore as ExpandMoreIcon,
    LocalGroceryStore as LocalGroceryStoreIcon
} from '@mui/icons-material';
import Language from './Language';

// ==============================|| HeaderTop ||============================== //

function HeaderTop() {
    return (
        <AppBar component="nav" sx={{ boxShadow: 0, pr: 0.5 }}>
            <ToolbarStyle variant="dense">
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        startIcon={<LocalGroceryStoreIcon sx={{ marginLeft: '-10px' }} />}
                        sx={{
                            background: 'linear-gradient(180deg, #F2994A 0%, #B55500 100%)',
                            boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)',
                            borderRadius: '5px',
                            width: '182px',
                            height: '35px',
                            mr: 2
                        }}
                    >
                        <Typography sx={{ fontWeight: 700 }}>E-marketplace</Typography>
                    </Button>
                    <Button variant="contained" color="primary" sx={{ width: '26px' }}>
                        <Typography variant="button" sx={{ mt: -0.1 }}>
                            Agent
                        </Typography>
                    </Button>
                    <IconButton size="large" aria-label="new account" color="secondary">
                        <AccountCircleIcon />
                    </IconButton>
                    <Typography noWrap variant="text14">
                        นายอสังหา...
                    </Typography>
                    <IconButton size="large" aria-label="new expand" color="secondary">
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="new notifications" color="secondary">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="setting of current user" color="secondary">
                        <SettingsIcon />
                    </IconButton>
                    <Language />
                </Box>
            </ToolbarStyle>
        </AppBar>
    );
}

export default HeaderTop;

// ==============================|| HeaderTopStyled ||============================== //

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        minHieght: '57px'
    }
}));
