import React from "react";

import CartContext from "context/CartContext"
import { CartItem, CartHeader, CartFooter, Image,Footer } from "./styles"
import { QuantityAdjuster } from "../QuantityAdjuster";
import { RemoveLineItem } from "../RemoveLineItem";
import { Link, navigate } from "gatsby"
import { Button } from "../Button";


export function CartContents() {
  const { checkout,updateLineItem } = React.useContext(CartContext);
  console.log(checkout?.lineItems)

const handleAdjustQuantity = ({quantity,variantId})=>{
  updateLineItem({quantity,variantId})
}

  return (
    <section>
      <h1 style={{textAlign: "center",marginBottom:"50px"}}>
        カートの商品
      </h1>
      {checkout?.lineItems.length !== 0 && (
           <CartHeader>
        <div>商品</div>
        <div>価格</div>
        <div>数量</div>
        <div></div>
         <div>合計金額</div>
      </CartHeader>
      )}
      {checkout?.lineItems.length === 0 && <h4>カートに商品が入ってません。</h4>}
      {checkout?.lineItems?.map(item=>(
      <CartItem key={item.variant.id}>
        <div>
          <div>
              {item.title}
           <Link to={`/products/${item.title}`}><Image src= {item.variant.image.src} width="100px" height="100px"/></Link>
          </div>
          <div>
            {item.variant.title === "Default Title" ? "" : item.variant.title}
          </div>
          </div>

        <div>
          ￥{item.variant.price}
        </div>
        <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity}/>
          </div>
            <div>
            <RemoveLineItem lineItemId={item.id}/>
          </div>
          <div>
            ￥{(item.quantity * item.variant.price)}
          </div>

      </CartItem>
      ))}
      {!checkout?.lineItems &&    <CartFooter>
        <div><strong>合計金額</strong></div>
        <div>
          <span>￥{checkout?.totalPrice}</span>
        </div>
      </CartFooter>}

      <Footer>
        <div>
          <Button><Link to={`/all-products`} style={{textDecoration:"none"}}>         ショッピングを続ける</Link>
          </Button>

        </div>
        <div>
          {checkout?.lineItems.length !== 0 && (
             <Button onClick={() => {
            window.location.href = checkout.webUrl
          }}>お支払いに進む</Button>
          )}

        </div>
      </Footer>
    </section>
  )
}
