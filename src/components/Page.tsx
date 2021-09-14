import Header from '@/components/Header';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const Page: React.FC = ({ children }) => (
    <main style={mainStyles}>
        <Header />
        {children}
    </main>
);

export default Page;
