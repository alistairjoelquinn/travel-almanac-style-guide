import { createContext, useContext, useReducer } from 'react';
import { Action, InitialState, initialState, reducer } from './reducer';

const ThemeStateContext = createContext<InitialState>({} as InitialState);
const ThemeDispachContext = createContext<React.Dispatch<Action>>(null!);

export const ColorThemeProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemeStateContext.Provider value={state}>
            <ThemeDispachContext.Provider value={dispatch}>{children}</ThemeDispachContext.Provider>
        </ThemeStateContext.Provider>
    );
};

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispachContext);
