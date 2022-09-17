import { addDatesNumbersToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { BulletPoints } from '@/models/content';
import { Masonry } from 'masonic';
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

const DottedCard = ({ data }: { data: BulletPoints }) => (
  <GridItemStyles key={data.title}>
    <dt>{data.title}</dt>
    <ul>
      {data.value.map((val: string) => (
        <li key={val}>{val}</li>
      ))}
    </ul>
  </GridItemStyles>
);
