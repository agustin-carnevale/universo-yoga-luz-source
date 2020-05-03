import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <PageContainer>
      <SEO title="Home" />
      <h1>Hola a todos,</h1>
      <p>Bienvenidos/as al nuevo sitio.</p>
      <p>Proximamente....</p>
      <div style={{ width: `280px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </PageContainer>
  </Layout>
)

export default IndexPage
