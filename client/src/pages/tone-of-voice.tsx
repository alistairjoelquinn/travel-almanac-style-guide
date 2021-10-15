import styled from 'styled-components';

import toneOfVoice from '@/../content/tone-of-voice-string';

const ToneOfVoiceStyles = styled.div`
    padding: 1vh 10vw;
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
            <div dangerouslySetInnerHTML={{ __html: toneOfVoice }} />
        </ToneOfVoiceStyles>
    );
};

export default ToneOfVoice;
