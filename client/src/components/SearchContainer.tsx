import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

interface Props {
    searching: boolean;
    userInput: string;
    setUserInput: Dispatch<SetStateAction<string>>;
    IntendedResult: ReactNode;
}

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

const SearchContainer = ({ searching, userInput, setUserInput, IntendedResult }: Props) => {
    const [session, loading] = useSession();
    const router = useRouter();

    if (loading) {
        return (
            <DotStyles>
                <div className="dots-1" />
            </DotStyles>
        );
    }

    if (!session && router.pathname === '/signin') {
        return <div>{IntendedResult}</div>;
    }

    if (!session && router.pathname !== '/signin') {
        if (typeof window !== 'undefined') {
            window.location.replace('/signin');
            return null;
        }
    }

    return (
        <div>
            <div>{session && <SearchBar userInput={userInput} setUserInput={setUserInput} />}</div>
            {searching ? <SearchResults /> : IntendedResult}
        </div>
    );
};

export default SearchContainer;
