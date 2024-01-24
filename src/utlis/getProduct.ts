// later use mongo db and use ids to get products

import { Product, products } from "../data/products"

export const getProduct: (fullName: string)=>Product = (fullName)=>{
  let desiredProduct = products.find((p)=>p.fullName === fullName);
  if(!desiredProduct) desiredProduct = {} as Product //.find() has return type of Product | undefined

  return desiredProduct;
  
}