import styled from "styled-components";
import { StyledLink } from "../StyledLink"


export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: "/cart"
}))
`
display:flex;
padding-left:16px;
margin-left:30px;
margin-top:15px;
color:black;
text-decoration:none;
`;

export const MenuLink = styled.div `
  color: black;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
   z-index: 10;
  @media (max-width:769px) {
    font-size: 1.4rem;
  }
`

export const CartCounter = styled.span `
position:relative;
  background-color: red;
  color: white;
  border-radius: 100px;
  padding: 0 7px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 999;
`