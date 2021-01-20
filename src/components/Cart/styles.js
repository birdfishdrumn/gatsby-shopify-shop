import styled from "styled-components";
import { StyledLink } from "../StyledLink"


export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: "/cart"
}))
`
display:flex;
padding-left:16px;
margin-left:auto;
margin-top:10px;
color:black;
text-decoration:none;
`;