import React from "react";
import { Layout,Filters,ProductsGrid } from "components";
import ProductContext from "context/ProductContext"
import styled from "styled-components";
import queryString from "query-string"
import {useLocation} from "@reach/router"
import { query } from "../templates/ProductTemplate";

const Content = styled.div`
display:grid;
grid-gap:20px;
margin-top:20px;
grid-template-columns:1fr 3fr;
 @media(max-width:768px){
   grid-template-columns:1fr;
 }
`

export default function AllProducts() {
    const { products, collections } = React.useContext(ProductContext)
    const { search } = useLocation();
    const qs = queryString.parse(search)
    const selectedCollectionIds = qs.c?.split(",").filter(c => !!c) || [];
    const selectedCollectionIdMap = {};
const searchTerm = qs.s

    selectedCollectionIds.forEach(collectionId => {
        selectedCollectionIdMap[collectionId] = true
    })

  const collectionProductMap = {};
    if (collections) {
        collections.forEach(collection => {
            collectionProductMap[collection.shopifyId] = {};

            collection.products.forEach(product => {
                collectionProductMap[collection.shopifyId][product.shopifyId] = true
            })
       })
    }
    console.log(collectionProductMap)

    const filterByCategory = (product) => {
        if (Object.keys(selectedCollectionIdMap).length) {
            for (let key in selectedCollectionIdMap) {
                if (collectionProductMap[key]?.[product.shopifyId]) {
                    return true;
              }
            }
            return false
        }
        return true
    }

    const filterBySearchTerm = product=>{
        if (searchTerm) {
          return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        }
        return true;

    }

    const filteredProducts = products.filter(filterByCategory).filter(filterBySearchTerm)
    // const childImage = [...products]
    // console.log(...childImage)

    return ( <Layout >
        <h2 >商品数: {filteredProducts.length}</h2>
        <Content>
            <Filters />
            <div>
                <ProductsGrid products={filteredProducts}/>
            </div>
        </Content>
    </Layout>
    )
}
