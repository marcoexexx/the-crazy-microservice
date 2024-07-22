import cookieParser from "cookie-parser";
import express from "express";
import { createServer } from "http";
import { authRequire } from "./middleware/auth_require";
import { authResolver } from "./middleware/auth_resolver";
import { authServiceProxy, orderServiceProxy, productServiceProxy } from "./middleware/proxy_middleware";

const app = express();
const server = createServer(app);

app.use(cookieParser());
app.use(authResolver);

// Proxy middlewares
app.use("/auth", authServiceProxy);

app.use("/api", authRequire);

app.use("/api/products", productServiceProxy);
app.use("/api/orders", orderServiceProxy);

app.use("*", (_, res) => {
  return res.status(404).json({ message: "Route not found" });
});

server.listen(process.env.API_GATEWAY || 5000, () => {
  console.log("API gate way is ready:5000");
});
