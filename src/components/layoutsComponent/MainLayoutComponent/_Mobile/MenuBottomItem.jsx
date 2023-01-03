import { Box, Typography } from '@mui/material';

function MenuBottomItem({ src, alt, text }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '80px',
                justifyContent: 'center',
                cursor: 'pointer',
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <img style={{ width: 40, paddingBottom: '6px' }} src={src} alt={alt}></img>
            <Typography sx={{ fontWeight: 700, fontSize: '12px', lineHeight: '11px' }}>{text}</Typography>
        </Box>
    );
}

export default MenuBottomItem;
