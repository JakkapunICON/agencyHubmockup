import { Box } from '@mui/material';

import FilterLeft from './FilterLeft';
import FilterRight from './FilterRight';

function Filters() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                overflowX: 'auto',
                px: 6,
                py: 2
            }}
        >
            <FilterLeft />
            <FilterRight />
        </Box>
    );
}

export default Filters;
