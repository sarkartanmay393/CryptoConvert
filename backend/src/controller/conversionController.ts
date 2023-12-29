import { Request, Response } from "express";

const convertCurrency = async (req: Request, res: Response) => {
  const { sourceCrypto, amount, targetCurrency }: RequestBody = req.body;
  try {
    const queryParams = new URLSearchParams({
      amount: amount.toString(),
      id: sourceCrypto,
      convert: targetCurrency,
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
      message: `Convert ${amount} ${sourceCrypto} to ${targetCurrency}`,
      data: parsedData.data,
    });
  } catch (error) {
    res.json({ message: "conversion fialed" });
  }
};

export default convertCurrency;

type ConversionData = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  last_updated: string;
  quote: {
    INR: {
      price: number;
      last_updated: string;
    };
  };
};

interface RequestBody {
  sourceCrypto: string;
  amount: number;
  targetCurrency: string;
}
