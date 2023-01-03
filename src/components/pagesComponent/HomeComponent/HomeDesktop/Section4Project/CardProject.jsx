import { Box, Typography, styled, useTheme } from '@mui/material';

function CardProject({ typography }) {
    const theme = useTheme();

    return (
        <CardProjectStyled>
            <Typography
                sx={{
                    color: theme.palette.primary.main,
                    position: 'absolute',
                    bottom: '12px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    textTransform: 'uppercase'
                }}
            >
                {typography}
            </Typography>
        </CardProjectStyled>
    );
}

export default CardProject;

const CardProjectStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    // alignItems:'center',
    position: 'relative',
    minWidth: 297,
    height: 160,
    background: '#F8F9FA',
    border: '1px solid #C3CAD2',
    borderRadius: '20px',
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1.2),
    marginLeft: theme.spacing(0.5),
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(1.02)'
    }
}));
