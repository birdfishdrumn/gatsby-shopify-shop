import React from "react";
import { QuantityAdjusterWrapper,AdjusterButton } from "./styles";

export function QuantityAdjuster({ item, onAdjust }) {
  let { quantity } = item;

  const handleDecrementQuantity = (e) => {

    if (quantity === 1) {
     e.preventDefault()
    } else {
       onAdjust({ variantId: item.variant.id, quantity: -1 })
   }
  }

   const handleIncrementQuantity = (e) => {

         if (quantity > 8) {
     e.preventDefault()
    } else {
           onAdjust({ variantId: item.variant.id, quantity: 1 })
   }
   }

//   if (quantity > 5) {
//    return  quantity === 5
//  }
  return(
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={(e)=>handleDecrementQuantity(e)}>-</AdjusterButton>
      <div>{quantity}</div>
      {/* <input value={quantity}/> */}
       <AdjusterButton onClick={(e)=>handleIncrementQuantity(e)}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  )
}
