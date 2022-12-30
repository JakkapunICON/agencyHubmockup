import React, { useState } from 'react';

import {
    CardMedia,
    AppBar,
    Box,
    InputBase,
    Toolbar,
    Typography,
    styled,
    useTheme,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    Divider
} from '@mui/material';

import { Search as SearchIcon } from '@mui/icons-material';

import DevSearchDialog from '../index.jsx';
import DevSearchButtonSelect from './DevSearchButtonSelect';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DevSearch() {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <AppBar sx={{ boxShadow: 0, pr: 2, pl: 4, background: '#EEF2F4' }}>
                <Toolbar variant="dense">
                    <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px', mr: 3 }}>ค้นหาอสังหาฯ</Typography>
                    <Button sx={{ background: '#014C71', borderRadius: '10px', height: '45px' }}>
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px' }}>เลือกประเภท</Typography>
                    </Button>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color="secondary" sx={{ fontSize: '36px' }} />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="พิมพ์ชื่อโครงการ หรือทำเลที่ต้องการ" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                    <Button
                        variant="contained"
                        onClick={handleClickOpen}
                        sx={{ background: '#520002', borderRadius: '10px', height: '45px', width: '181px' }}
                    >
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px' }}>SEARCH</Typography>
                    </Button>
                    <DevSearchDialog open={open} Transition={Transition} handleClose={handleClose} />
                </Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <DevSearchButtonSelect sx={{ mt: 4 }} />
                    <DevSearchButtonSelect sx={{ mt: 4 }} />
                    <DevSearchButtonSelect sx={{ mt: 4 }} />
                    <DevSearchButtonSelect sx={{ mt: 4 }} />
                    <DevSearchButtonSelect sx={{ mt: 4 }} />
                </Box>
            </AppBar>
        </Box>
    );
}

export default DevSearch;

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
