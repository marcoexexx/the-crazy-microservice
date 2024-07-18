import { Worker, WorkerOptions } from "bullmq";
import { ORDER } from "./db";

const opts: WorkerOptions = {
  connection: {
    host: "crazy-ms-redis",
    port: 6379,
  },
};

type ProductData = {
  id: string;
  price: number;
};

type OrderData = {
  products: ProductData[];
  orderBy: string;
};

export const orderWorker = new Worker<OrderData, void, string>("product", async (job) => {
  console.log("Recieve job", job.name);

  if (job.name === "order-products") {
    ORDER.push({
      id: String(ORDER.length + 1),
      products: job.data.products.map(product => product.id),
      orderdBy: job.data.orderBy,
      totalPrice: job.data.products.reduce((a, c) => a + c.price, 0),
    });
  }
}, opts);
