import styled from "styled-components";

export const SearchForm = styled.form `
display:flex;
margin-left:auto;
margin-top:5px;
`

export const Input = styled.input `
border: 1px solid #ccc;

font-size:16px;
font-family:"Open Sans", sans-serif;
border-radius:0;
padding: 5px 10px;
height: 44px;
box-sizing: border-box;
min-width:50px;
&:focus{
  border-color:black
}

font-size:16px;
font-family:"Open Sans", sans-serif;
border-radius:0;
padding: 5px 10px;
height: 44px;
min-width:50px;
&:focus{
  border-color:black
}
@media(max-width:767px){
  display:none;
}
`

export const Button = styled.button `
 outline:none;
 padding:0 10px;
height: 44px;
 /* height: ${props => props.fullWidth ? "":""}; */
 line-height:44px;
 box-shadow:none;

 font-size:16px;
 font-family: "Open Sans",sans-serif;
 cursor: pointer;
 font-weight:bold;
 text-transform: uppercase;
 text-decoration:none;
 background:white;
 color:black;

 white-space: nowrap;
@media(max-width:768px){
margin-top:10px;
border:none;
}

&:hover:not(:disabled){
  color:white;
  background:black;
  border:1px solid rgba(0,0,0,0)
}

 &:disabled{
   border-color:#999;
   cursor:pointer;
   color:#999;
 }
`