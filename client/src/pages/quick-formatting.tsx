import { addQuickFormattingToState } from 'components/context/actions';
import { Dispatch, State } from 'components/context/context';
import { PageStyles } from 'components/styles/CardPageStyles';
import { Masonry } from 'masonic';
import { BasicCard } from 'pages/punctuation';
import { useEffect } from 'react';

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
      <Masonry items={quickFormatting} columnWidth={300} render={BasicCard} />
    </PageStyles>
  );
}
