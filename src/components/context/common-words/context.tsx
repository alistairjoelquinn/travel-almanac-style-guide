import { createContext, useContext, useReducer } from 'react';
import { Action, InitialState, initialState, reducer } from './reducer';

const CommonWordsStateContext = createContext<InitialState>({} as InitialState);
const CommonWordsDispachContext = createContext<React.Dispatch<Action>>(null!);

export const CommonWordsProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CommonWordsStateContext.Provider value={state}>
            <CommonWordsDispachContext.Provider value={dispatch}>{children}</CommonWordsDispachContext.Provider>
        </CommonWordsStateContext.Provider>
    );
};

export const useThemeState = () => useContext(CommonWordsStateContext);
export const useThemeDispatch = () => useContext(CommonWordsDispachContext);
