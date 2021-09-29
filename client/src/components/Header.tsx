import { Dispatch as ReactDispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import paths from '../../content/paths.json';
import { Dispatch, State } from './context/context';
import { userSearchEnd } from './context/actions';

const HeaderStyles = styled.nav`
    height: 22vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f0f0f0;
    position: relative;
    h5 {
        font-family: MinionBold;
        height: 5rem;
        color: black;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        padding-top: 0.3rem;
        font-size: 4rem;
    }
`;

interface NavProps {
    searching: boolean;
}

const NavStyles = styled.nav<NavProps>`
    width: 95%;
    margin-left: 2.5%;
    display: flex;
    justify-content: space-around;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    div {
        width: 100%;
        height: 2.5rem;
        margin-top: 0.3rem;
        font-family: MinionBold;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            outline: none;
            border: none;
            cursor: pointer;
            height: 1.6rem;
            padding: 0;
            background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px no-repeat;
            transition: 0.5s;
            &.underline {
                --d: ${(p) => (p.searching ? '0' : '100%')};
            }
        }
    }
`;

const Header = ({ setUserInput }: { setUserInput: ReactDispatch<SetStateAction<string>> }) => {
    const router = useRouter();
    const { searching } = State();
    const dispatch = Dispatch();

    return (
        <>
            <HeaderStyles>
                <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
            </HeaderStyles>
            <NavStyles className="page-nav" searching={searching}>
                {paths.map((path) => (
                    <div
                        key={path.name}
                        onClick={() => {
                            userSearchEnd(dispatch);
                            setUserInput('');
                        }}
                    >
                        <Link href={path.path} passHref>
                            <button type="button" className={router.pathname === path.path ? 'underline' : ''}>
                                {path.name}
                            </button>
                        </Link>
                    </div>
                ))}
            </NavStyles>
        </>
    );
};

export default Header;
