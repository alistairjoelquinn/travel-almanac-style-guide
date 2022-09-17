import { Action, InitialState } from 'components/context/models';
import { initialState, reducer } from 'components/context/reducer';
import { createContext, useContext, useReducer } from 'react';

const StateContext = createContext<InitialState>({} as InitialState);
const DispatchContext = createContext<React.Dispatch<Action>>(null!);

export const State = () => useContext(StateContext);
export const Dispatch = () => useContext(DispatchContext);

export default function StateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
