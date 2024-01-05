import express, { json } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import convertCurrency from "./controller/conversionController";
import getCryptocurrencies from "./controller/currencyController";
dotenv.config();

const app = express();

app.use(json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://cryptoconvert.vercel.app"],
  })
);

app.get("/api/currencies", getCryptocurrencies);
app.post("/api/convert", convertCurrency);

export default app;
