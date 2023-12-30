import { Request, Response } from "express";

const convertCurrency = async (req: Request, res: Response) => {
  const { symbol, amount, convert }: RequestBody = req.body;
  try {
    const queryParams = new URLSearchParams({
      amount: amount.toString(),
      symbol: symbol,
      convert: convert,
    });

    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v2/tools/price-conversion?${queryParams}`,
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY || "",
        },
      }
    );
    const parsedData = await response.json();
    res.json({
      message: `Convert ${amount} ${symbol} to ${convert}`,
      data: parsedData.data,
    });
  } catch (error) {
    res.json({ message: "conversion fialed" });
  }
};

export default convertCurrency;

interface RequestBody {
  symbol: string;
  amount: number;
  convert: string;
}
