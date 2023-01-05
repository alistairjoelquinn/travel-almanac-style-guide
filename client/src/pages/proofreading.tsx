import { gql, useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import { HTMLTemplate } from 'models/content';
import { HTMLGrid, HTMLItemStyles, HTMLStyles } from './style';

export default function ProofReading() {
  const { data } = useQuery(GET_PROOF_READING_QUERY);
  const items = data && [...data.allProofreading];
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

const GET_PROOF_READING_QUERY = gql`
  query {
    allProofreading {
      _id
      value
      order
    }
  }
`;
