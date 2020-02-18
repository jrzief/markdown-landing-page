/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

import { ApolloProvider } from "react-apollo-hooks"

import { client } from "./src/apollo"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthProvider
      navigate={navigate}
      auth0_domain="markdown-landing-page.auth0.com"
      auth0_client_id="Kflyw0Tx3FGSDBtEGoNjiruBJwI2snan"
    >
      {element}
    </AuthProvider>
  </ApolloProvider>
)

/* import React from "react"
import { ThemeProvider } from "theme-ui"
//import theme from "@rebass/preset"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
 */
