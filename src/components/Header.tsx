import styled from 'styled-components';

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
        color: #000000;
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
    span {
        width: 100%;
        line-height: 2rem;
        text-align: center;
        font-family: MinionBold;
        padding-top: 0.3rem;
    }
`;

const Header = () => {
    const clickHander = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('e.currentTarget: ', e.currentTarget);
        console.log('e.target: ', e.target);
    };

    return (
        <>
            <HeaderStyles>
                <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
            </HeaderStyles>
            <NavStyles className="page-nav" onClick={clickHander}>
                <span className="/">Common Words</span>
                <span className="/punctuation">Punctuation</span>
                <span className="/dates-numbers">Dates & Numbers</span>
                <span className="/best-practise">Best Practise</span>
                <span className="/tone-of-voice">Tone of Voice</span>
            </NavStyles>
        </>
    );
};

export default Header;
