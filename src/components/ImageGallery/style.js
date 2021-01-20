import styled from "styled-components"

export const ImageGalleryWrapper = styled.section `
>div:first-child{
border:5px solid #eee;
border-radius: 5px;
transition: 5s;
}

>div:last-child{
  margin-top: 5px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap: 5px;

  @media(min-width:768px){
  grid-template-columns: 1fr 1fr 1fr
}
/* デスクトップPCで見た場合 */
@media(min-width:1024px){
  grid-template-columns: 1fr 1fr 1fr 1fr
}
}
/* タブレットで見た場合 */

`