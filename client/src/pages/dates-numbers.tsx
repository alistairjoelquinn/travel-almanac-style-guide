import { addDatesNumbersToState } from 'components/context/actions';
import { Dispatch, State } from 'components/context/context';
import { GridItemStyles, PageStyles } from 'components/styles/CardPageStyles';
import parse from 'html-react-parser';
import { Masonry } from 'masonic';
import { BulletPoints } from 'models/content';
import { useEffect } from 'react';

export default function DatesNumbers() {
  const dispatch = Dispatch();
  const { datesNumbers } = State();

  useEffect(() => {
    if (dispatch) {
      addDatesNumbersToState(dispatch);
    }
  }, [dispatch]);

  return (
    <PageStyles>
      <Masonry items={datesNumbers} columnWidth={400} render={DottedCard} />
    </PageStyles>
  );
}

export const DottedCard = ({ data }: { data: BulletPoints }) => (
  <GridItemStyles key={data.title}>
    <dt>{data.title}</dt>
    <ul>
      {data.value.map((val: string) => (
        <li key={val}>{parse(val)}</li>
      ))}
    </ul>
  </GridItemStyles>
);
