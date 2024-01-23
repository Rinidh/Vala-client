import { products, Product } from "../data/products";

export function getMatchingProducts (searchedText: string){
  let matchedProducts: Product[] = [];

  const searchRegex = new RegExp(searchedText, "i");
  
  products.forEach((prod)=>{
    if(searchRegex.test(prod.fullName)) matchedProducts.push(prod)
  })
  

  console.log('function has run')
  return matchedProducts;
}