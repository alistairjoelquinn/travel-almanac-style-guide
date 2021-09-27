import { animated, useTransition } from 'react-spring';

import Header from '@/components/Header';
import { State } from '@/components/context/context';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const Page: React.FC = ({ children }) => {
    const { searching } = State();

    const transition = useTransition(searching, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <main style={mainStyles}>
            <Header />
            <SearchBar />
            {transition((styles, val) => (
                <animated.div style={styles}>{val ? <SearchResults /> : children}</animated.div>
            ))}
        </main>
    );
};

export default Page;
