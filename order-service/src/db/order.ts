type Order = {
  id: string;
  orderdBy: string; // User Id
  products: string[];
  totalPrice: number;
};

export const ORDER: Order[] = [];
