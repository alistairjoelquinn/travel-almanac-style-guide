import Header from '@/components/Header';
import { Paper } from '@material-ui/core';

const Page: React.FC = ({ children }) => (
    <Paper square>
        <Header />
        {children}
    </Paper>
);

export default Page;
