import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import paths from '../../content/paths.json';

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

const NavStyles = styled.nav`
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
            height: 1.8rem;
            background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px no-repeat;
            transition: 0.5s;
            &.underline {
                --d: 100%;
            }
        }
    }
`;

const Header = () => {
    const router = useRouter();

    return (
        <>
            <HeaderStyles>
                <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
            </HeaderStyles>
            <NavStyles className="page-nav">
                {paths.map((path) => (
                    <div key={path.name}>
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
