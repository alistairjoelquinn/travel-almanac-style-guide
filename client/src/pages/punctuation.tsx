import { addPunctuationToState } from 'components/context/actions';
import { Dispatch, State } from 'components/context/context';
import { GridItemStyles, PageStyles } from 'components/styles/CardPageStyles';
import parse from 'html-react-parser';
import { Masonry } from 'masonic';
import { Words } from 'models/content';
import { useEffect } from 'react';

export default function Punctuation() {
  const dispatch = Dispatch();
  const { punctuation } = State();

  useEffect(() => {
    if (dispatch) {
      addPunctuationToState(dispatch);
    }
  }, [dispatch]);

  return (
    <PageStyles>
      <Masonry items={punctuation} columnWidth={300} render={BasicCard} />
    </PageStyles>
  );
}

export const BasicCard = ({ data }: { data: Words }) => (
  <GridItemStyles key={data.title}>
    <dt>{data.title}</dt>
    {data.value && <dd>{parse(data?.value)}</dd>}
  </GridItemStyles>
);
