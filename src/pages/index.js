import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import HomeImage from "../components/HomeImage"
import SEO from "../components/seo"
//import { css } from "@emotion/core"
//import { Link } from "gatsby"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  font-family: sans-serif;
  font-size: 16px;
`

const PageTitle = styled.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;

  @media (max-width:720px) {
    font-size: 1.0em;
  }
`

const PageIntroText = styled.p`
  text-align: center;
  margin: 40px 10px;
  line-height: 30px;
  font-size: 16px;
`

const Tab = styled.span`
 padding-left: 8px;
`
const IndexPage = () => (
  <Layout>
    <PageContainer>
      <SEO title="Home" />
      <PageTitle>U N I V E R S O <Tab/> Y O G A  <Tab/> L U Z</PageTitle>
      <div style={{width: '80%'}}>
        <HomeImage />
      </div>
      <PageIntroText>
        Universo Yoga Luz es un Portal.<br/>
        Quien decida sumergirse en la experiencia y atravesar ese Portal, se encontrará con sus infinitas posibilidades, y adquirirá nuevas herramientas para poder desarrollar su máximo potencial y vivir, cada vez más, una Vida llena de Sentido, Alegría, Paz, Amor y plenitud.
      </PageIntroText>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </PageContainer>
  </Layout>
)

export default IndexPage
