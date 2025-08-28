import 'styled-components'
import defaultTheme from './theme/defaultTheme'

declare module 'styled-components' {
    type defaultTheme = typeof defaultTheme

    interface DefaultTheme extends defaultTheme { }
}