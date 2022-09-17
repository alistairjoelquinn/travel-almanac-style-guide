import {
  addBestPracticeToState,
  addCommonWordsToState,
  addDatesNumbersToState,
  addPunctuationToState,
  addQuickFormattingToState,
  getSearchResults,
  userSearchCommence,
  userSearchEnd,
} from 'components/context/actions';
import { Dispatch } from 'components/context/context';
import { Dispatch as ReactDispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';

export default function SearchBar({
  userInput,
  setUserInput,
}: {
  userInput: string;
  setUserInput: ReactDispatch<SetStateAction<string>>;
}) {
  const dispatch = Dispatch();

  useEffect(() => {
    if (userInput) {
      (async () => {
        await Promise.all([
          addBestPracticeToState(dispatch),
          addCommonWordsToState(dispatch),
          addDatesNumbersToState(dispatch),
          addPunctuationToState(dispatch),
          addQuickFormattingToState(dispatch),
        ]);
        await userSearchCommence(dispatch);
        await getSearchResults(dispatch, userInput);
      })();
    } else {
      userSearchEnd(dispatch);
    }
  }, [userInput, dispatch]);

  return (
    <SearchBarStyles
      placeholder="Search..."
      onChange={(e) => setUserInput(e.target.value)}
      value={userInput}
    />
  );
}

const SearchBarStyles = styled.input`
  width: 94%;
  padding: 1rem;
  margin-top: 2rem;
  margin-left: 3%;
  margin-right: 3%;
  height: 4rem;
  line-height: 2rem;
  font-size: 2rem;
  vertical-align: middle;
  border-radius: 1rem;
  border: 1px solid black;
  &:-webkit-input-placeholder,
  &:-ms-input-placeholder {
    line-height: 2rem;
    font-size: 2rem;
    vertical-align: middle;
  }
`;
