import express from "express";
import { createServer } from "http";
import { ORDER } from "./db";
import { orderWorker } from "./worker";

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  const orders = ORDER.filter(order => order.orderdBy === req.userId);
  return res.status(200).json({ result: orders });
});

server.listen(3030, () => {
  console.log("Order service is ready:3030");
});

process.on("SIGINT", () => {
  console.log("Shutdown");
  server.close();
  orderWorker.close();
});
