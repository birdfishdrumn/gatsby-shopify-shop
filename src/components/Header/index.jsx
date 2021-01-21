import React from "react";
import { HeaderWrapper } from "./styles";
import { Cart } from "../Cart"
import { Logo } from "../Logo";
import { Search } from "../Search";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import styled from "styled-components";

const HeaderBar = styled(AppBar)`
   flex-grow: 1;
`

const Bar = styled(Toolbar)`
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

`
const HeaderMenu = styled.div`
width:100%;
   display:flex;
   justify-content:space-between;
   >div:last-child{
     display:flex;
     margin-right:50px;

   }
`

export function Header() {
  return (
    <HeaderWrapper>
      <div>
          <HeaderBar position="fixed" style={{backgroundColor:"white"}}>
          <Bar >
            <HeaderMenu>
              <div>
            <Link to="/">

        <Logo/>
                </Link>
                </div>
             <div>
       <Search />
      <Cart />
           </div>
</HeaderMenu>
        </Bar>

        </HeaderBar>
           </div>
       </HeaderWrapper>
  )
}
