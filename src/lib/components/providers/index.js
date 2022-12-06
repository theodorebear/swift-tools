// original typescript
// import React, { createContext } from 'react'

// export const LinkContext = createContext(null)
// interface ILinker {
//   CustomLink: any

//   children: React.ReactNode
// }
// export const Linker = ({ CustomLink, children }: ILinker) => {
//   return <LinkContext.Provider value={CustomLink}>{children}</LinkContext.Provider>
// }

import React, { createContext } from "react"
import ThemeProvider from "styled-components"
export const SwiftLinkContext = createContext(null)
export const SwiftTheme = createContext({
  logo: {
    primary: "",
    secondary: "",
  },
  color: {
    primary: "#aa5ab8", // #5ab89e
    secondary: "",
  },
})
const SwiftProvider = ({ CustomLink, branding, children }) => {
  return (
    <SwiftLinkContext.Provider value={CustomLink}>
      <SwiftTheme.Provider value={branding}>
        <ThemeProvider theme={branding}>{children}</ThemeProvider>
      </SwiftTheme.Provider>
    </SwiftLinkContext.Provider>
  )
}
export default SwiftProvider
