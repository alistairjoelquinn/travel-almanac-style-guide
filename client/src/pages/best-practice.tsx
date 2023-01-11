import { addBestPracticeToState } from 'components/context/actions';
import { Dispatch, State } from 'components/context/context';
import { GridItemStyles, PageStyles } from 'components/styles/CardPageStyles';
import parse from 'html-react-parser';
import { Masonry } from 'masonic';
import { BulletPoints } from 'models/content';
import { useEffect } from 'react';

export default function BestPractice() {
  const dispatch = Dispatch();
  const { bestPractice } = State();

  useEffect(() => {
    if (dispatch) {
      addBestPracticeToState(dispatch);
    }
  }, [dispatch]);

  return (
    <PageStyles>
      <Masonry items={bestPractice} columnWidth={500} render={LargeCard} />
    </PageStyles>
  );
}

const LargeCard = ({ data }: { data: BulletPoints }) => (
  <GridItemStyles key={data.title}>
    <dt>{data.title}</dt>
    <div>
      {data.value.map((val: string) => (
        <dd key={val} className="paragraphs">
          {parse(val)}
        </dd>
      ))}
    </div>
  </GridItemStyles>
);
