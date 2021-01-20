import React,{useState} from "react";
import { ProductQuantityAdderWrapper } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import CartContext from "context/CartContext";


export function ProductQuantityAdder({ variantId, available }) {
  const [quantity, setQuantity] = useState(1)
  const {updateLineItem} = React.useContext(CartContext)
  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
        updateLineItem({ variantId, quantity: parseInt(quantity,5)});
  }

console.log(available)
  return (

      <ProductQuantityAdderWrapper>
      <strong>数量<span>※9個までのご購入が可能です。</span></strong>
         {!available && <h2>SOLD OUT</h2>}
      <form onSubmit={handleSubmit}>

        <Input disable ={!available} type="number" inputmode="numeric" min="1" max="9" step="1" value={quantity} onChange={handleQuantityChange} />
        <Button type="submit" disable={!available} fullWidth>カートに入れる</Button>
      </form>
           </ProductQuantityAdderWrapper>

  )
}
