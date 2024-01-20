export interface Product {
  name: string,
  qtyEachUnit: string,
  pack: number,
  price: number
}

export const products: { [key: string]: any } = {
  // must explicitly define the index signature for referencing to work in getMatchingProducts()
  "vinegar": {
    "500ml": {
      name: "Vala's White Distilled Vinegar 500ml",
      qtyEachUnit: "500ml",
      pack: 12,
      price: 21_000,
    },
    "2ltr": {
      name: "Vala's White Distilled Vinegar 2 ltr",
      qtyEachUnit: "2ltr",
      pack: 6,
      price: 42_000,
    },
    "5ltr": {
      name: "Vala's White Distilled Vinegar 5 ltr",
      qtyEachUnit: "5ltr",
      pack: null,
      price: 11_000,
    },
  },

  "spirit": {
    "violet": {
      name: "Vala's Violet Spirit 500ml",
      qtyEachUnit: "500ml",
      pack: 24,
      price: 21_000,
    },
    "methylated": {
      name: "Vala's Methylated Spirit 500ml",
      qtyEachUnit: "500ml",
      pack: 24,
      price: 30_000,
    }
  }
}