import styled from "styled-components";

export const CartHeader = styled.div `
display:grid;
grid-template-columns:2fr 1fr 1fr 0.5fr 1fr 40px;
font-weight:bold;
border-bottom: 1px solid black;
>div{
  padding:8px;
    &:first-child{
    text-align:center;
  }
}
@media(max-width:767px) {
 >div{
    display:none;
 }
}
`

export const CartFooter = styled.div `
display:grid;
grid-template-columns:5fr 1fr 40px;
 font-weight:bold;
  font-size:1.5rem;
>div{
  padding:8px;

  &:first-child{
    text-align:right;
  }
}
@media(max-width:767px) {
  font-size:1.3rem;
 >div{
    &:first-child{
    text-align:left
 }
}
}
`


export const CartItem = styled.div `
border-bottom:1px solid black;
display:grid;
align-items:center;
font-size:20px;
grid-template-columns:2fr 1fr 1fr 0.5fr 1fr 40px;
>div{
  padding: 8px;

 :first-child{
   >div:first-child{
     font-weight: bold;
     display:flex;
     font-size:15px;
     flex-direction:column;
     text-align:center;
     margin:0 auto;
   }
   >div:last-child{

     color: #999;
     margin-top:4px;
     font-size:15px;
     text-align:center;
   }
 }

}
@media(max-width:767px) {
  margin-top:10px;
   font-size:18px;;
  position:relative;
  align-items:flex-start;
 grid-template-columns:2fr 3fr 2fr 40px;
>div:last-child{

  position:absolute;
  bottom:5px;
  right:5px;
  font-weight:bold;
  font-size:1.2rem;
}
}
`

export const Image = styled.img `
  display:block;
  margin: 0 auto;
  width:100px;
  height:100px;
`

export const Footer = styled.footer `
  display:grid;
  grid-template-columns:1fr 1fr;
  margin-top:20px;
  >div:last-child{
    text-align:right;
  }
  `