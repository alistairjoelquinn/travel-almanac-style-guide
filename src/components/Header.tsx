import styled from 'styled-components';

const HeaderStyles = styled.nav`
    height: 25vh;
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
    .page-nav {
        position: absolute;
        bottom: 0;
        width: 95%;
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
    }
`;

const Header = () => (
    <HeaderStyles>
        <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
        <div className="page-nav">
            <span>Common Words</span>
            <span>Punctuation</span>
            <span>Dates & Numbers</span>
            <span>Best Practise</span>
            <span>Tone of Voice</span>
        </div>
    </HeaderStyles>
);

export default Header;
