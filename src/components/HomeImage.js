import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InstagramProfileURL= "https://www.instagram.com/universoyogaluz/"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HomeImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portada-web.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <a href={InstagramProfileURL} target="_blank" rel="noopener noreferrer">
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </a>
}

export default HomeImage
