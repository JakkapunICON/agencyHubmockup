import { Box, AppBar, Toolbar, Typography, Button, useTheme, styled, InputBase, Divider } from '@mui/material';

import Filters from './Filters';

function FilterComponent() {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflowX: 'auto',
                    paddingY: 5
                }}
            >
                <AppBar sx={{ boxShadow: 0, pr: { xl: 20, lg: 2, xs: 2 }, pl: { xl: 20, lg: 2, xs: 2 } }}>
                    <Toolbar variant="dense">
                        <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px', whiteSpace: 'nowrap', mr: 4 }}>
                            ค้นหาอสังหาฯ
                        </Typography>
                        <Button variant="outlined" sx={{ background: '#014C71', borderRadius: '10px', minWidth: '154px', height: '45px' }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                    whiteSpace: 'nowrap',
                                    color: theme.palette.white.main
                                }}
                            >
                                เลือกประเภท
                            </Typography>
                        </Button>
                        <Search>
                            <StyledInputBase placeholder="พิมพ์ชื่อโครงการ หรือทำเลที่ต้องการ" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                        <Button variant="outlined" sx={{ borderRadius: '10px', minWidth: '154px', height: '45px', background: '#520002' }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                    whiteSpace: 'nowrap',
                                    color: theme.palette.white.main
                                }}
                            >
                                SEARCH
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Filters />
        </>
    );
}

export default FilterComponent;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.palette.white.main,
    marginRight: theme.spacing(3),
    border: '1.5px solid #E0E0E0',
    marginLeft: theme.spacing(3),
    width: '561px',
    [theme.breakpoints.down('lg')]: {
        width: '500px'
    }
    // [theme.breakpoints.down('md')]: {
    //     width: '100%'
    // }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '561px',
    [theme.breakpoints.down('lg')]: {
        width: '500px'
    },
    // [theme.breakpoints.down('md')]: {
    //     width: '100%'
    // },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

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
