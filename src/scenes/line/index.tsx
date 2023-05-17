import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import { useState } from 'react';

const Line: React.FC = () => {
    const [isDashboard, setIsDashboard] = useState(false);
    return (
        <Box m='20px'>
            <Header title='Line Chart' subtitle='Simple Line Chart' />
            <Box height='75vh'>
                <LineChart isDashboard={isDashboard} />
            </Box>
        </Box>
    )

}

export default Line;
