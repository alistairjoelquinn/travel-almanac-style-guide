import styled from 'styled-components';
import Link from 'next/link';

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
    a {
        width: 100%;
        line-height: 2rem;
        text-align: center;
        font-family: MinionBold;
        color: black;
        padding-top: 0.3rem;
        text-decoration: none;
        &:visited {
            color: black;
        }
    }
`;

const Header = () => (
    <>
        <HeaderStyles>
            <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
        </HeaderStyles>
        <NavStyles className="page-nav">
            <Link href="/">Common Words</Link>
            <Link href="/punctuation">Punctuation</Link>
            <Link href="/dates-numbers">Dates & Numbers</Link>
            <Link href="/best-practise">Best Practise</Link>
            <Link href="/tone-of-voice">Tone of Voice</Link>
        </NavStyles>
    </>
);

export default Header;
