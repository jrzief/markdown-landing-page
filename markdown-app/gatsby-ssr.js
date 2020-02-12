/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="markdown-landing-page.auth0.com"
    auth0_client_id="Kflyw0Tx3FGSDBtEGoNjiruBJwI2snan"
  >
    {element}
  </AuthProvider>
)

//import { ThemeProvider } from "theme-ui"
//import theme from "@rebass/preset"

//export const wrapRootElement = ({ element }) => (
//<ThemeProvider theme={theme}>{element}</ThemeProvider>
//)
