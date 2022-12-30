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

import DevSearchButtonSelect from './DevSearchButtonSelect';
import DevSearchDialogInSize from './DevSearchDialogInSize';

function DevSearchDialog({ open, Transition, handleClose }) {
    const theme = useTheme();

    return (
        <Dialog
            maxWidth="xl"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent sx={{ p: 8 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 4 }}>
                    <DevSearchButtonSelect sx={{ border: '2px solid #520002' }} />
                    <DevSearchButtonSelect sx={{ border: '2px solid #520002' }} />
                    <DevSearchButtonSelect sx={{ border: '2px solid #520002' }} />
                    <DevSearchButtonSelect sx={{ border: '2px solid #520002' }} />
                    <DevSearchButtonSelect sx={{ border: '2px solid #520002' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
                    <Typography sx={{ fontSize: '24px', lineHeight: '33px', fontWeight: 600, mb: 2 }}>ที่เคยค้นหา</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                    </Box>
                    <Divider />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
                    <Typography sx={{ fontSize: '24px', lineHeight: '33px', fontWeight: 600, mb: 2 }}>Location</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                    </Box>
                    <Divider />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
                    <Typography sx={{ fontSize: '24px', lineHeight: '33px', fontWeight: 600, mb: 2 }}>ใกล้รถไฟฟ้า</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                        <DevSearchDialogInSize />
                    </Box>
                    <Divider />
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default DevSearchDialog;
