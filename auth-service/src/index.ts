import cookieParser from "cookie-parser";
import express, { CookieOptions } from "express";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import { USER } from "./db";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cookieParser());

const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_ENV === "production",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = USER.find(user => user.email === email && user.password === password);
  if (!user) return res.status(401).json({ message: "AuthFailed" });

  const token = jwt.sign({ sub: user.id }, process.env.SECRET_KEY!, { expiresIn: "1h" });
  res.cookie("token", token, cookieOptions);

  return res.status(200).json({ token });
});

app.post("/logout", (_req, res) => {
  res.clearCookie("token");

  return res.status(200).json({ message: "Ok" });
});

server.listen(3010, () => {
  console.log("Auth service is ready:3010");
});
