import { graphql } from "gatsby";

export const ShopifyProductFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct{
          shopifyId
     title
     description
     availableForSale
       descriptionHtml
     images {
       id
      localFile {
        childImageSharp {
          fluid(maxWidth: 300){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
}
`