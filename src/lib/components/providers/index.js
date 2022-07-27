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

// dumed down javascript
import React, { createContext } from 'react'

export const SwiftLinkContext = createContext(null)

const SwiftProvider = ({ CustomLink, children }) => {
  return <SwiftLinkContext.Provider value={CustomLink}>{children}</SwiftLinkContext.Provider>
}

export default SwiftProvider
