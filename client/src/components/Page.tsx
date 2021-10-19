import { useState } from 'react';
import { useSession } from 'next-auth/client';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Header from '@/components/Header';
import { State } from '@/components/context/context';
import SearchContainer from './SearchContainer';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const DotStyles = styled.div`
    .dots-1 {
        color: #d64429;
        position: absolute;
        inset: 50% 0 0 50%;
        transform: translate(-50%, -50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
        transform: translateX(-38px);
        animation: d1 0.5s infinite alternate linear;
    }

    @keyframes d1 {
        50% {
            box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
        }
        100% {
            box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
        }
    }
`;

const Page: React.FC = ({ children: IntendedResult }) => {
    const [session, loading] = useSession();
    const router = useRouter();

    const { searching } = State();
    const [userInput, setUserInput] = useState('');

    if (loading) {
        return (
            <DotStyles>
                <div className="dots-1" />
            </DotStyles>
        );
    }

    if (!session) {
        router.push('/api/auth/signin');
    }

    return (
        <>
            {session && (
                <main style={mainStyles}>
                    <Header setUserInput={setUserInput} />
                    <SearchContainer
                        searching={searching}
                        IntendedResult={IntendedResult}
                        userInput={userInput}
                        setUserInput={setUserInput}
                    />
                </main>
            )}
        </>
    );
};

export default Page;
