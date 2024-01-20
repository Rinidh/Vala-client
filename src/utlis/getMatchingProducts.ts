import { products, Product } from "../data/products";

export function getMatchingProducts (searchedText: string){
  let matchedProducts: Product[] = [];

  const searchRegex = new RegExp(searchedText, "i")  

  let matchedGeneralProductNames: string[] = []
  for (const generalProductName in products) {
    if(searchRegex.test(generalProductName)) {
      matchedGeneralProductNames.push(generalProductName)
    }
  }

  matchedGeneralProductNames.forEach((generalProductName)=>{
    const productsObject: { [key: string]: Product } = products[generalProductName];

    for (const product in productsObject) {
      matchedProducts.push(productsObject[product])
    }
  })

  console.log('function has run')
  return matchedProducts;
}