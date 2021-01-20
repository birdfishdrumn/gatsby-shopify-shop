import React from "react"
import { CollectionTileWrapper,CollectionTileContent,Title,Description } from "./styles";
import BackgroundImage from "gatsby-background-image"
import {StyledLink} from "../StyledLink"

export function CollectionTile({ description,destination, title, backgroundImage ,sale}) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage style={{backgroundPosition:"top"}}fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>
            詳しく見る
          </StyledLink>
         </div>

      </CollectionTileContent>
    </CollectionTileWrapper>
  )
}
