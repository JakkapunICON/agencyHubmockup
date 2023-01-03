import { Box, Typography, styled, useTheme, CardMedia, Button } from '@mui/material';
import { height } from '@mui/system';

function AddCustomerComponent() {
    const theme = useTheme();

    return (
        <AddCustomerStyled>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: theme.spacing(4) }}>
                <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '33px' }}>เพิ่มลูกค้าใหม่ และนัดหมาย</Typography>
            </Box>
            <CardAddCustomerStyled>
                <Box
                    sx={{
                        width: '509px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#EEF2F4'
                    }}
                >
                    <CardMedia component="img" src="/src/images/customer/homeicon.png" sx={{ width: '205px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: theme.spacing(2) }}>
                        <Typography sx={{ marginBottom: theme.spacing(0.5) }}>Developer</Typography>
                        <select name="cars" id="cars" style={{ height: '35px' }}>
                            <option value="volvo">Select</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: theme.spacing(2) }}>
                        <Typography sx={{ marginBottom: theme.spacing(0.5) }}>Project</Typography>
                        <select name="cars" id="cars" style={{ height: '35px' }}>
                            <option value="volvo">Select</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            width: '295px',
                            height: '77px',
                            background: theme.palette.white.main,
                            borderRadius: '50px',
                            marginTop: theme.spacing(2)
                        }}
                    >
                        <CardMedia component="img" src="src/images/customer/image-profile.png" sx={{ width: '42px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: theme.spacing(0.4) }}>
                                <Typography sx={{ fontWeight: 700 }}>Laurent Perrier </Typography>
                                <Typography sx={{ fontWeight: 400 }}>(Agent)</Typography>
                            </Box>
                            <Typography>บริษัท:XXXXXXX</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '761px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        background: '#FFFFFF'
                    }}
                >
                    <Box sx={{ marginTop: theme.spacing(12), marginRight: theme.spacing(15) }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: theme.spacing(4) }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, marginRight: theme.spacing(2) }}>ชื่อ - นามสกุล *</Typography>
                            <input defaultValue="XXXXXX" style={{ width: 400, height: 35 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: theme.spacing(4) }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, marginRight: theme.spacing(2) }}>ชื่อเล่น</Typography>
                            <input defaultValue="XXXXXX" style={{ width: 400, height: 35 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: theme.spacing(4) }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, marginRight: theme.spacing(2) }}>อีเมลล์</Typography>
                            <input defaultValue="XXXXXX" style={{ width: 400, height: 35 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: theme.spacing(4) }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, marginRight: theme.spacing(2) }}>เบอร์โทรศัพท์</Typography>
                            <input defaultValue="XXXXXX" style={{ width: 400, height: 35 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: theme.spacing(4) }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, marginRight: theme.spacing(2) }}>วันที่</Typography>
                            <input defaultValue="XXXXXX" style={{ width: 400, height: 35 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: theme.spacing(4) }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, marginRight: theme.spacing(2) }}>เวลา</Typography>
                            <input defaultValue="000-000-000" style={{ width: 400, height: 35 }} />
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: theme.spacing(8), display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="outlined"
                            sx={{ width: 181, height: 45, border: '2px solid #0B1D26', borderRadius: '5px', marginRight: theme.spacing(3) }}
                        >
                            <Typography
                                variant="button"
                                sx={{ marginTop: theme.spacing(-0.1), color: '#0B1D26', fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}
                            >
                                ยกเลิก
                            </Typography>
                        </Button>
                        <Button variant="contained" sx={{ width: 181, height: 45, border: '2px solid #0B1D26', borderRadius: '5px' }}>
                            <Typography
                                variant="button"
                                sx={{ marginTop: theme.spacing(-0.1), color: '#FFFFFF', fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}
                            >
                                เพิ่มรายการ
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </CardAddCustomerStyled>
        </AddCustomerStyled>
    );
}

export default AddCustomerComponent;

const AddCustomerStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    overflowX: 'auto'
}));

const CardAddCustomerStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '1270px',
    height: '650px',
    background: '#FFFFFF',
    border: '1px solid #F2F2F2',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    marginRight: 'auto',
    marginLeft: 'auto'
}));
