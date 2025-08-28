// AppTheme.tsx    
// This file sets up the ThemeProvider for styled-components

import { ThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'

const AppTheme = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>
}

export default AppTheme