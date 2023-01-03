import { Box, CardMedia, Grid, styled, Typography, useTheme } from '@mui/material';

function DevProjectCardWhite() {
    const theme = useTheme();

    return (
        <CardWhite>
            <CardMedia
                component="img"
                src="/src/images/dev/iconvector01.svg"
                sx={{ position: 'absolute', width: '31px', left: '35px', bottom: '24px' }}
            />
            <Typography sx={{ position: 'absolute', fontWeight: 700, fontSize: '18px', left: '90px', bottom: '26px' }}>xxxxxxxxxxx</Typography>
        </CardWhite>
    );
}

export default DevProjectCardWhite;

const CardWhite = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '261px',
    height: '193px',
    borderRadius: '20px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    background: theme.palette.white.main,
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(1.05)'
    }
}));
