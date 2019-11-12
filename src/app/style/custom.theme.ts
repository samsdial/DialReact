import { getGlobalStyles, makeTheme, toMakeTheme } from 'bootstrap-styled'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${getGlobalStyles()}
  body {
      padding-top: 0;
  }
`

const customTheme = makeTheme({
    '$brand-primary': '#FF8802',
    '$zindex-navbar': '99',
    '$navbar-padding-y': '0',
    '$component-active-bg': '#5a5a5a',
    '$dropdown-margin-top': '0'
})

export default toMakeTheme(customTheme)
