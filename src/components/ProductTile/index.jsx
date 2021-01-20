import React from "react";
import { ProductTileWrapper,Description,Title,Price  } from "./styles";
import Img from "gatsby-image";
import {StyledLink} from "../StyledLink"


export function ProductTile({title,imageFluid,description,minPrice,handle}) {
  return <ProductTileWrapper>
    <Img fluid={imageFluid}/>
    <Title> {title}</Title>
    <Description>
      {description}...
    </Description>
    <Price>￥{parseFloat(minPrice)}</Price>
    <StyledLink to={`/products/${handle}`}>詳細を見る</StyledLink>
  </ProductTileWrapper>
}
