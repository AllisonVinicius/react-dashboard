import React from 'react';
import { ThemeProvider }  from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {useTheme} from './hooks/theme';
import Routes from './routes';
import dark from './styles/themes/dark';
import light from './styles/themes/light';





const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={light}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>    
        
    );
}

export default App;