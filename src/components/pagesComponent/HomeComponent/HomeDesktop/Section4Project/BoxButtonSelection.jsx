import { CardMedia, Typography, Box, styled, useTheme } from '@mui/material';

function BoxButtonSelection({ imgSrc, typography }) {
    const theme = useTheme();

    return (
        <BoxButtonSelectStyled>
            <CardMedia component="img" src={imgSrc} alt="" sx={{ width: 31, mr: 2 }} />
            <Typography sx={{ fontWeight: 700 }}>{typography}</Typography>
        </BoxButtonSelectStyled>
    );
}

export default BoxButtonSelection;

const BoxButtonSelectStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    minWidth: '200px',
    paddingX: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    border: '2px solid #FFFFFF',
    borderRadius: '50px',
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(1.02)'
    }
}));
