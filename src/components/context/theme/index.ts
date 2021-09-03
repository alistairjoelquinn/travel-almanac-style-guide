import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';

const ThemeStateContext = createContext();
const ThemeDispachContext = createContext();

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispachContext);

const initialState = {
    currentTheme: 'light',
};

export const ColorThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemeStateContext.Provider value={state}>
            <ThemeDispachContext.Provider value={}>{children}</ThemeDispachContext.Provider>
        </ThemeStateContext.Provider>
    );
};