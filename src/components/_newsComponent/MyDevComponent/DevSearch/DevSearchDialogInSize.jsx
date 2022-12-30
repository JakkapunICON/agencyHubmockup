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

function DevSearchDialogCardInSize() {
    const theme = useTheme();

    return (
        <DevSearchDialogCardInSizeStyled>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px' }}>XXXXXXX</Typography>
        </DevSearchDialogCardInSizeStyled>
    );
}

export default DevSearchDialogCardInSize;

const DevSearchDialogCardInSizeStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '185px',
    height: '60px',
    borderRadius: '5px',
    background: '#EEF2F4',
    marginRight: theme.spacing(2)
}));
