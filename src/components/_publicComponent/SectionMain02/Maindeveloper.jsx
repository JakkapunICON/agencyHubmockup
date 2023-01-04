import { Box, useTheme, styled, Typography, Button, CardMedia, InputBase } from '@mui/material';

import homeVector from '/src/images/agency/homeVector.svg';

function Maindeveloper() {
    const theme = useTheme();
    return (
        <BoxStyled>
            <CardMedia component="img" src={homeVector} sx={{ width: '206px', mb: 3 }} />
            <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px', mb: 6 }}>Agency XXXXXXXX</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ width: 436, height: 45, borderRadius: '5px', background: theme.palette.secondary.main }}>
                    <Typography
                        variant="button"
                        sx={{ marginTop: theme.spacing(-0.1), color: '#FFFFFF', fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}
                    >
                        Apply
                    </Typography>
                </Button>
            </Box>
        </BoxStyled>
    );
}

export default Maindeveloper;

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

const InputStyled = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '250px',
    height: '35px',
    borderRadius: '3px',
    background: '#FFFFFF',
    border: '1px solid #CCCCCC',
    marginBottom: theme.spacing(2)
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    marginLeft: theme.spacing(3),
    fontSize: '16px',
    color: '#9E9E9E'
}));
