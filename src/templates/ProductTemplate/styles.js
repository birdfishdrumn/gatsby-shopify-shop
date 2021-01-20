import styled from "styled-components"

export const Grid = styled.section `
 display : grid;
 grid-template-columns: 1fr;
 grid-gap: 20px;
 margin-top:20px;
grid-column:reverse;
    >div:first-child{
     order: 1;
   }
 @media(min-width: 768px){
   grid-template-columns: 1fr 1fr;

   >div:first-child{
     order: 2;
     padding:20px
   }

   >div:last-child{
     order: 1
   }
 }
`;

export const SelectWrapper = styled.div `
margin-top:40px;
>strong{
  display: block;
  margin-bottom: 0px;
  }
`

export const Price = styled.div `
margin: 40px 10px;

font-size:30px;
`;