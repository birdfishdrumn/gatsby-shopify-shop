import React from "react";
import { CartWrapper } from "./styles"
import {FaShoppingCart} from "react-icons/fa"
import CartContext from "context/CartContext";
import  Badge  from "@material-ui/core/Badge"
export function Cart() {
  const { checkout } = React.useContext(CartContext);
  let totalQuantity = checkout?.lineItems.map(item => item.quantity)
  if (checkout) {
     const reducer = (sum, currentValue) => sum + currentValue
  }
  console.log(totalQuantity.length)
  // let totalQuantity = 0;
  // if (checkout) {
  //   checkout.lineItems.forEach(lineItem => {
  //     totalQuantity = totalQuantity + lineItem.quantity;
  //   })
  // }

  return (
    <CartWrapper>
      <Badge badgeContent={totalQuantity.length} color="secondary">
              <FaShoppingCart size="2.5rem" />
      </Badge>

      {/* <span>
        {totalQuantity.reduce(reducer) || 0}
     </span> */}
    </CartWrapper>
  )
}
