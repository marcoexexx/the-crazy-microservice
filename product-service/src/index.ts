import cookieParser from "cookie-parser";
import express, { Request } from "express";
import { createServer } from "http";
import { PRODUCT } from "./db";
import { productQueue } from "./queue";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => {
  const products = PRODUCT;

  return res.status(200).json({ result: products });
});

app.post("/buy", async (req: Request<any, any, { ids: string[] }>, res) => {
  const { ids } = req.body;

  await productQueue.add("order-products", {
    products: PRODUCT.filter(product => ids.includes(product.id)),
    orderBy: req.userId,
  });

  return res.status(200).json({ message: "Ok" });
});

server.listen(3020, () => {
  console.log("Product service is ready:3020");
});

process.on("SIGINT", () => {
  console.log("Shutdown");
  server.close();
  productQueue.close();
});
