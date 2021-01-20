import React from "react";
import { CartWrapper } from "./styles"
import {FaShoppingCart} from "react-icons/fa"
import CartContext from "context/CartContext";
import  Badge  from "@material-ui/core/Badge"
export function Cart() {
  const { checkout } = React.useContext(CartContext);
  // const totalQuantity = checkout?.lineItems.map(item => item.quantity)
  // const reducer = (sum, currentValue) => sum + currentValue
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    })
  }

  return (
    <CartWrapper>
      <Badge badgeContent={totalQuantity} color="secondary">
              <FaShoppingCart size="2.5rem" />
      </Badge>

      {/* <span>
        {totalQuantity.reduce(reducer) || 0}
     </span> */}
    </CartWrapper>
  )
}
