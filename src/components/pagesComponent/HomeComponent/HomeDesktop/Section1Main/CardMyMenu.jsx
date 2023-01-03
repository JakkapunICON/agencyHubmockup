import { Typography, Box, styled, useTheme, CardMedia } from '@mui/material';

function CardMyMenu({ imgSrc, typography }) {
    const theme = useTheme();

    return (
        <CardMyMenuStyled>
            <CardMedia component="img" image={imgSrc} alt={imgSrc} sx={{ width: 25, height: 25, mr: theme.spacing(1.2) }} />
            <Typography variant="text14">{typography}</Typography>
        </CardMyMenuStyled>
    );
}

export default CardMyMenu;

const CardMyMenuStyled = styled(Box)(({ theme }) => ({
    backgroundColor: '#F2F2F2',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    width: '188px',
    height: '55px',
    borderRadius: '10px',
    padding: theme.spacing(3),
    margin: theme.spacing(0.5),
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(1.05)'
    }
}));
