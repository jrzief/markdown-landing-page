import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Heading, Button } from "rebass"

import { useAuth } from "react-use-auth"

import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()
  const data = useStaticQuery(graphql`
    query {
      mdlapi {
        hello {
          world
        }
      }
    }
  `)

  const apolloData = useQuery(gql`
    query hello {
      hello {
        world
      }
    }
  `)

  const liveData = apolloData.data,
    loading = apolloData.loading
  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
      <Heading fontSize={[5, 6, 7]}> Markdown Landing Page </Heading>
      <h1>Hi people</h1>
      <p>Write a landing page for anything, in all situtions.</p>
      <p>
        From GraphQL server:{" "}
        {liveData ? liveData.hello.world : data.mdlapi.hello.world}
      </p>
      {loading ? <p>Fetching ..</p> : null}
      {isAuthenticated() ? <p>Hello {user.name}</p> : null}
      <Button bg="highlite" onClick={login}>
        Get Started
      </Button>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
