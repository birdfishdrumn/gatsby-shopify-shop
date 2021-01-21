// eslint-disable jsx-a11y/no-onchange
import React, { useEffect, useState } from "react";
import { graphql } from "gatsby"
import { Layout,ImageGallery,ProductQuantityAdder,Button} from "components";
import { Grid,SelectWrapper,Price } from "./styles"
import CartContext from "context/CartContext";
import { navigate, useLocation } from "@reach/router";
import queryString from "query-string"


export const query = graphql`
 query ProductQuery($shopifyId: String){
   shopifyProduct(
   shopifyId:{eq:$shopifyId})
   {
    ...ShopifyProductFields
    }
 }
`;

const ProductTemplate = (props) => {
  console.log(props.data.shopifyProduct.description)
  console.log(props.data.shopifyProduct)
  const [product, setProduct] = useState(null);
  const [selectedVariant,setSelectedVariant] = useState(null)
  const { getProductById } = React.useContext(CartContext)
  const { search, origin, pathname } = useLocation()
  console.log(search, origin, pathname)
  const variantId = queryString.parse(search).variant;

  console.log({ getProductById })
  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result)
      setSelectedVariant(result.variants.find(({id})=>id === variantId) || result.variants[0])
    })
  }, [getProductById, setProduct,props.data.shopifyProduct.shopifyId,variantId]);

  const handleVariantChange = (e) => {
    const newVariant = product?.variants.find(v => v.id === e.target.value)
    setSelectedVariant(newVariant);
    navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,{replace: true})
  }
  console.log(props.data.shopifyProduct.images)



  return (
    <Layout>
      <Button onClick={()=>navigate(-1)}>ホーム</Button>
      <Grid>

        <div>

          <h1>{props.data.shopifyProduct.title}</h1>
             <div>{!props.data.shopifyProduct.availableForSale && <h1>SOLD OUT</h1>}</div>
          {/* <p>{(props.data.shopifyProduct.descriptionHtml)}</p> */}
          <div dangerouslySetInnerHTML={{ __html: props.data.shopifyProduct.descriptionHtml }}/>
          {product?.availableForSale && !!selectedVariant &&
            <>
            {/* 種類がないときはセレクトバーが表示されない。 */}
            {product?.variants.length > 1 &&
              <SelectWrapper>
                <strong>種類</strong>
                <select
                  value={selectedVariant.id}
                  onChange={handleVariantChange}>
                  {product?.variants.map(v => (
                    <option key={v.id} value={v.id}>{v.title}</option>
                  ))}
                </select>
              </SelectWrapper>
            }

            {!!selectedVariant &&

              <Price>￥{selectedVariant.price}</Price>}
            <ProductQuantityAdder
              available = {selectedVariant.available}
              variantId={selectedVariant.id} />
            </>
            }
        </div>

        <div>
          <ImageGallery selectedVariantImageId={selectedVariant?.image.id} images={props.data.shopifyProduct.images}/>
        </div>
      </Grid>
    </Layout>

  )
}

export default ProductTemplate
