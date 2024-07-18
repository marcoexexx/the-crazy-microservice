type Product = {
  id: string;
  createdBy: string; // User id
  title: string;
  price: number;
  stock: number;
};

export const PRODUCT: Product[] = [
  {
    id: "1",
    title: "Apple",
    price: 15.5,
    stock: 12,
    createdBy: "1",
  },
  {
    id: "2",
    title: "Orange",
    price: 15.8,
    stock: 5,
    createdBy: "1",
  },
];
