import React, { useState } from 'react';

import { CardMedia, AppBar, Box, InputBase, Toolbar, Typography, styled, useTheme, Button, Grid } from '@mui/material';

import { Search as SearchIcon } from '@mui/icons-material';
import DevProjectSearchComponentCard from './DevProjectSearchComponentCard';

function DevProjectSearchComponent() {
    const theme = useTheme();

    return (
        <Box sx={{ padding: theme.spacing(12) }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                <Typography noWrap sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px', mr: 1 }}>
                    ค้นหาโครงการ
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="secondary" sx={{ fontSize: '36px' }} />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="พิมพ์ชื่อโครงการ หรือทำเลที่ต้องการ" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Button variant="contained" sx={{ background: '#520002', borderRadius: '10px', height: '45px', width: '181px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px' }}>SEARCH</Typography>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 8 }}>
                <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px', ml: 4, mb: 4 }}>ค้นหามากสุด</Typography>
                <Box>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 8 }}>
                <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px', ml: 4, mb: 4 }}>ทั้งหมด</Typography>
                <Box sx={{ mb: 2 }}>
                    <Grid container spacing={4} wrap="nowrap" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Grid container spacing={4}>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={4}>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                        <Grid item>
                            <DevProjectSearchComponentCard />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default DevProjectSearchComponent;

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
