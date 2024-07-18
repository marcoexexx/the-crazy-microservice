import { createProxyMiddleware } from "http-proxy-middleware";
import { config } from "../../config";

export const authServiceProxy = createProxyMiddleware({
  target: config.auth_proxy,
  changeOrigin: true,
});

export const productServiceProxy = createProxyMiddleware({
  target: config.product_proxy,
  changeOrigin: true,
});

export const orderServiceProxy = createProxyMiddleware({
  target: config.order_proxy,
  changeOrigin: true,
});
