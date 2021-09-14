import styled from 'styled-components';

const HeaderStyles = styled.nav`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
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

const Header = () => (
    <HeaderStyles>
        <h5>THE TRAVEL ALMANAC STYLE GUIDE</h5>
    </HeaderStyles>
);

export default Header;
