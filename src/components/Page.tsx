import Header from '@/components/Header';
import { StateProvider } from '@/components/context/context';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const Page: React.FC = ({ children }) => (
    <StateProvider>
        <main style={mainStyles}>
            <Header />
            {children}
        </main>
    </StateProvider>
);

export default Page;
