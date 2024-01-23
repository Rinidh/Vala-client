export interface Product {
  name: string,
  fullName: string
  qtyEachUnit: string,
  pack?: number | null,
  price: number,
  image?: string,
  description?: string,
}

export const products: Product[] = [
  {
    name: "Vinegar",
    fullName: "Vala's White Distilled Vinegar 500ml",
    qtyEachUnit: "500ml",
    pack: 12,
    price: 21_000,
  },
  {
    name: "Vinegar",
    fullName: "Vala's White Distilled Vinegar 2 ltr",
    qtyEachUnit: "2ltr",
    pack: 6,
    price: 42_000,
  },
  {
    name: "Vinegar",
    fullName: "Vala's White Distilled Vinegar 5 ltr",
    qtyEachUnit: "5ltr",
    pack: null,
    price: 11_000,
  },
  {
    name: "Spirit",
    fullName: "Vala's Violet Spirit 500ml",
    qtyEachUnit: "500ml",
    pack: 24,
    price: 21_000,
  },
  {
    name: "Spirit",
    fullName: "Vala's Methylated Spirit 500ml",
    qtyEachUnit: "500ml",
    pack: 24,
    price: 30_000,
  }
]