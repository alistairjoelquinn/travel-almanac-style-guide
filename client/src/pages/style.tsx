import { gql, useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import { HTMLTemplate } from 'models/content';
import styled from 'styled-components';

export default function Style() {
  const { data } = useQuery(GET_TONE_OF_VOICE_QUERY);
  const items = data && [...data.allToneOfVoice];
  return (
    <HTMLStyles>
      <HTMLGrid>
        {items
          ?.sort((a: HTMLTemplate, b: HTMLTemplate) => a.order - b.order)
          .map((item: HTMLTemplate) => (
            <HTMLItemStyles key={item._id}>{parse(item.value)}</HTMLItemStyles>
          ))}
      </HTMLGrid>
    </HTMLStyles>
  );
}

const GET_TONE_OF_VOICE_QUERY = gql`
  query {
    allToneOfVoice {
      _id
      value
      order
    }
  }
`;

export const HTMLGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const HTMLItemStyles = styled.div`
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

export const HTMLStyles = styled.div`
  padding: 1vh 5vw;
  animation: fade 1.5s ease-in-out;
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
