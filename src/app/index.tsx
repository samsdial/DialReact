import React from 'react'
import Header from './components/HeaderComponent'
import BootstrapProvider from '@bootstrap-styled/provider';
import customTheme, { GlobalStyle } from './style/custom.theme'

const App: React.FC = () => {
    return (
        <BootstrapProvider reset={true} theme={customTheme()}>
            <GlobalStyle />
            <Header/>
        </BootstrapProvider>
    )
}
export default App
