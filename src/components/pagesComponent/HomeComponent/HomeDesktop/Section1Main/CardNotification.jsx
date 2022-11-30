import { Typography, Box, styled, useTheme } from '@mui/material';

function CardNotification({ typography1, typography2 }) {
    return (
        <CardNotificationStyled>
            <Typography variant="text16" sx={{ fontWeight: 700 }}>
                {typography1}
            </Typography>
            <Typography variant="text14">{typography2}</Typography>
        </CardNotificationStyled>
    );
}

export default CardNotification;

const CardNotificationStyled = styled(Box)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: '388px',
    height: '72px',
    borderRadius: '10px',
    border: '1px solid #C3CAD2',
    padding: theme.spacing(3),
    margin: theme.spacing(0.5)
}));
