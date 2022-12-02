import { Box, styled, useTheme, Typography, CardMedia } from '@mui/material';

import BoxButtonSelection from './BoxButtonSelection';
import CardProject from './CardProject';

function Section4Project() {
    const theme = useTheme();

    return (
        <BoxProjectComponentStyled>
            <BoxProjectComponentINSIDEStyled>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '50px', fontWeight: 700, lineHeight: '68px' }}>Project</Typography>
                    <Typography sx={{ fontSize: '25px' }}>SEE MORE</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <BoxButtonSelection imgSrc="/src/images/vector/vectorproject01.svg" typography="บ้านเดี่ยว" />
                    <BoxButtonSelection imgSrc="/src/images/vector/vectorproject02.svg" typography="บ้านแฝด" />
                    <BoxButtonSelection imgSrc="/src/images/vector/vectorproject02.svg" typography="ทาวน์โฮม" />
                    <BoxButtonSelection imgSrc="/src/images/vector/vectorproject03.svg" typography="คอนโด" />
                    <BoxButtonSelection imgSrc="/src/images/vector/vectorproject04.svg" typography="อาคารพาณิชย์" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <CardProject typography="Centro" />
                    <CardProject typography="The plant" />
                    <CardProject typography="ศุภาลัย ปาร์ค" />
                    <CardProject typography="Atoll" />
                    {/* <CardProject typography="Atoll" /> */}
                </Box>
            </BoxProjectComponentINSIDEStyled>
        </BoxProjectComponentStyled>
    );
}

export default Section4Project;

const BoxProjectComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    background: 'gray',
    color: '#FFFFFF'
}));

const BoxProjectComponentINSIDEStyled = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6),
    marginTop: theme.spacing(-16),
    height: '448px',
    background: theme.palette.primary.main,
    borderRadius: '20px',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)'
}));
