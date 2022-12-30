import { Box, useTheme, styled, Typography, Button, CardMedia } from '@mui/material';

function Maindev() {
    const theme = useTheme();
    return (
        <BoxStyled>
            <Typography sx={{ fontWeight: 700, fontSize: '40px', lineHeight: '54px', marginBottom: theme.spacing(3) }}>
                Project Highlight XXXXXXXXX
            </Typography>
            <Typography sx={{ marginBottom: theme.spacing(6) }}>
                &emsp;&emsp; Et has minim elitr intellegat. Mea aeterno eleifend antiopamad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                audiam animal molestiae te.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="outlined"
                    sx={{ width: 153, height: 45, border: '2px solid #0B1D26', borderRadius: '5px', marginRight: theme.spacing(3) }}
                >
                    <Typography
                        variant="button"
                        sx={{ marginTop: theme.spacing(-0.1), color: '#0B1D26', fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}
                    >
                        ดูรายละเอียด
                    </Typography>
                </Button>
                <Button variant="contained" sx={{ width: 153, height: 45, border: '2px solid #961619', borderRadius: '5px', background: '#961619' }}>
                    <Typography
                        variant="button"
                        sx={{ marginTop: theme.spacing(-0.1), color: '#FFFFFF', fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}
                    >
                        จอง
                    </Typography>
                </Button>
            </Box>
        </BoxStyled>
    );
}

export default Maindev;

const BoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '497px',
    height: '465px',
    top: '100px',
    left: '50px',
    background: '#FFFFFF',
    opacity: 0.9,
    boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    padding: theme.spacing(10)
}));
