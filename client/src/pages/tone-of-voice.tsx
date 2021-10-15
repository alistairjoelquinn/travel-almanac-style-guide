import styled from 'styled-components';
import parse from 'html-react-parser';

import toneArray from '@/../content/tone-array';

const ToneGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const ToneItemStyles = styled.div`
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    margin: 2rem 4rem;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

const ToneOfVoiceStyles = styled.div`
    padding: 1vh 5vw;
    h3 {
        margin: 1rem 0;
        font-weight: bold;
        font-size: 2rem;
    }
    p {
        margin: 1rem 0;
    }
    ul {
        margin: 0;
    }
    .underline {
        text-decoration: underline;
        margin-bottom: 0;
    }
    .grid-area {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid black;
    }
    .grid-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 0.5px solid black;
        & > div {
            border: 0.5px solid black;
            padding: 1rem;
        }
        .box-right {
            border-left: 1px solid black;
        }
    }
`;

const ToneOfVoice = () => {
    console.log('tone of voice');

    return (
        <ToneOfVoiceStyles>
            <ToneGrid>
                {toneArray.map((item, i) => (
                    <ToneItemStyles key={i}>{parse(item)}</ToneItemStyles>
                ))}
            </ToneGrid>
        </ToneOfVoiceStyles>
    );
};

export default ToneOfVoice;
