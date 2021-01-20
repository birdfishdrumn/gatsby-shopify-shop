import React from "react";
import ProductContext from "context/ProductContext"
import {ProductsGrid} from "../ProductsGrid"

export function FeaturedProducts() {
  const { collections } = React.useContext
(ProductContext)

  const featuredCollection = collections.find(collection=>collection.title === "Featured")
  console.log(featuredCollection)
  return <section>
    <h1 style={{padding: "20px",textAlign:"center"}}>人気のある商品</h1>
    <ProductsGrid products={featuredCollection.products}/>
  </section>
}
