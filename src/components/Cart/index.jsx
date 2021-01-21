import React from "react";
import { CartWrapper } from "./styles"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContext from "context/CartContext";
import  Badge  from "@material-ui/core/Badge"
export function Cart() {
  const { checkout } = React.useContext(CartContext);
  // const totalQuantity = checkout?.lineItems.map(item => item.quantity)
  // const reducer = (sum, currentValue) => sum + currentValue
  // console.log(checkout)
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    })
  }

  return (
    <CartWrapper>
      <Badge badgeContent={totalQuantity &&totalQuantity} color="secondary">
              <ShoppingCartIcon size="2.5rem" />
      </Badge>
<div>
        {totalQuantity} item(s) / £{checkout?.totalPrice || '0.00'}
      </div>
      {/* <span>
        {totalQuantity.reduce(reducer) || 0}
     </span> */}
    </CartWrapper>
  )
}
