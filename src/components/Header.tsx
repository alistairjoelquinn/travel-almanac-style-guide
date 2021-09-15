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
    div {
        width: 100%;
        height: 2.5rem;
        margin-top: 0.3rem;
        font-family: MinionBold;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            cursor: pointer;
            height: 1.5rem;
            &.underline {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const Header = () => {
    const clickHander = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('e.target: ', e.target);
    };

    return (
        <>
            <HeaderStyles>
                <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
            </HeaderStyles>
            <NavStyles className="page-nav">
                <div>
                    <Link href="/" passHref>
                        <span className="underline">Common Words</span>
                    </Link>
                </div>
                <div>
                    <Link href="/punctuation" passHref>
                        <span>Punctuation</span>
                    </Link>
                </div>
                <div>
                    <Link href="/dates-numbers" passHref>
                        <span>Dates & Numbers</span>
                    </Link>
                </div>
                <div>
                    <Link href="/best-practise" passHref>
                        <span>Best Practise</span>
                    </Link>
                </div>
                <div>
                    <Link href="/tone-of-voice" passHref>
                        <span>Tone of Voice</span>
                    </Link>
                </div>
            </NavStyles>
        </>
    );
};

export default Header;
