import { addQuickFormattingToState } from 'components/context/actions';
import { Dispatch, State } from 'components/context/context';
import { PageStyles } from 'components/styles/CardPageStyles';
import { Masonry } from 'masonic';
import { useEffect } from 'react';
import { DottedCard } from './dates-numbers';

export default function QuickFormatting() {
  const dispatch = Dispatch();
  const { quickFormatting } = State();

  useEffect(() => {
    if (dispatch) {
      addQuickFormattingToState(dispatch);
    }
  }, [dispatch]);

  return (
    <PageStyles>
      <Masonry items={quickFormatting} columnWidth={400} render={DottedCard} />
    </PageStyles>
  );
}
