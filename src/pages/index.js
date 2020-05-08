import React from "react"
import styled from "@emotion/styled"
//import { css } from "@emotion/core"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Logo from "../components/logo"
import SEO from "../components/seo"


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`

const IndexPage = () => (
  <Layout>
    <PageContainer>
      <SEO title="Home" />
      <h1>Proximamente..</h1>
      <p>Hola a todos,</p>
      <p>Bienvenidos/as al nuevo sitio.</p>
      <div style={{width: '300px', height: '400px'}}>
        <Image />
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </PageContainer>
  </Layout>
)

export default IndexPage
