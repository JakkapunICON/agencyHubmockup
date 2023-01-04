import { Box, Typography, Divider, styled, CardMedia, InputBase, useTheme, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

import map from '/src/images/filter/map.png';

function FilterLeft() {
    const theme = useTheme();

    return (
        <FilterLeftStyled>
            <FilterLeftHeaderStyled>
                <Typography sx={{ fontWeight: 700, fontSize: '24px', lineHeight: '33px' }}>Filter</Typography>
                <Typography
                    component={RouterLink}
                    to="/"
                    sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', textDecorationLine: 'underline', color: '#2F80ED' }}
                >
                    ล้างข้อมูล
                </Typography>
            </FilterLeftHeaderStyled>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', mt: 3, mb: 2 }}>Map</Typography>
                <Box
                    component={RouterLink}
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '270px',
                        height: '131px',
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        mb: 3,
                        ':hover': {
                            transform: 'scale(1.1)'
                        }
                    }}
                >
                    <CardMedia
                        component="img"
                        src={map}
                        sx={{ position: 'absolute', left: 0, right: 0, width: '270px', height: '131px' }}
                    ></CardMedia>
                    <Typography
                        sx={{
                            zIndex: 1,
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '33px',
                            ':hover': {
                                transform: 'scale(1.2)'
                            }
                        }}
                    >
                        ค้นหาบนแผนที่
                    </Typography>
                </Box>

                <Search sx={{ mb: 4 }}>
                    <SearchIconWrapper>
                        <SearchIcon color="secondary" sx={{ fontSize: '36px' }} />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="ระบุคำค้นหา" inputProps={{ 'aria-label': 'search' }} />
                </Search>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', mt: 3, mb: 2 }}>Zone</Typography>
                <FormGroup sx={{ mb: 1 }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="บางนา (000)" />
                    <FormControlLabel control={<Checkbox />} label="พระราม 2" />
                    <FormControlLabel control={<Checkbox />} label="พญาไท" />
                    <FormControlLabel control={<Checkbox />} label="ดอนเมือง" />
                </FormGroup>
                <Typography sx={{ fontSize: '16px', lineHeight: '22px', color: theme.palette.secondary.main, ml: 4, mb: 4 }}>
                    เพิ่มเติม 20 ตัวกรอก
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', mt: 3, mb: 2 }}>ราคา</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', mt: 3, mb: 2 }}>สถานที่ใกล้เคียง</Typography>
                <FormGroup sx={{ mb: 1 }}>
                    <FormControlLabel control={<Checkbox />} label="รถไฟฟ้า BTS" />
                    <FormControlLabel control={<Checkbox />} label="รถไฟฟ้า MRT" />
                    <FormControlLabel control={<Checkbox />} label="รถโดยสาร BRT" />
                    <FormControlLabel control={<Checkbox />} label="รถไฟฟ้า Airport Rail Link" />
                </FormGroup>
                <Typography sx={{ fontSize: '16px', lineHeight: '22px', color: theme.palette.secondary.main, ml: 4, mb: 4 }}>
                    เพิ่มเติม 20 ตัวกรอก
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', mt: 3, mb: 2 }}>อื่นๆ</Typography>
                <FormGroup sx={{ mb: 1 }}>
                    <FormControlLabel control={<Checkbox />} label="โควต้าต่างชาติ" />
                    <FormControlLabel control={<Checkbox />} label="อนุญาตเลี้ยงสัตว์" />
                    <FormControlLabel control={<Checkbox />} label="ห้องแบบ Penthouses" />
                    <FormControlLabel control={<Checkbox />} label="ห้องแบบ Duplex" />
                </FormGroup>
                <Typography sx={{ fontSize: '16px', lineHeight: '22px', color: theme.palette.secondary.main, ml: 4, mb: 4 }}>
                    เพิ่มเติม 20 ตัวกรอก
                </Typography>
            </Box>
        </FilterLeftStyled>
    );
}

export default FilterLeft;

const FilterLeftStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '336px',
    height: '1347px',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    background: '#FFFFFF',
    marginRight: theme.spacing(4)
}));

const FilterLeftHeaderStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85px',
    padding: theme.spacing(3)
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.palette.white.main,
    marginRight: theme.spacing(3),
    border: '1.5px solid #E0E0E0',
    width: '270px'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2, 0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        marginRight: '40px',
        marginLeft: '20px',

        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        height: '28px',

        // width: `calc(400px + 1000px)`,
        color: '#9E9E9E',
        fontSize: '16px',
        lineHeight: '22px'
    }
}));
