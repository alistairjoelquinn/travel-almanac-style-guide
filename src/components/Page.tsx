import Header from '@/components/Header';
import { State, StateProvider } from '@/components/context/context';
import SearchBar from './SearchBar';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const Page: React.FC = ({ children }) => {
    const { searching } = State();

    return (
        <StateProvider>
            <main style={mainStyles}>
                <Header />
                {searching ? SearchBar : children}
            </main>
        </StateProvider>
    );
};

export default Page;
