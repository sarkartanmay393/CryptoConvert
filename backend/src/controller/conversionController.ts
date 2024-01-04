import { Request, Response } from "express";
import { CryptoConversionData } from "src/utils/types";

const convertCurrency = async (req: Request, res: Response) => {
  const { source, target, amount }: RequestBody = req.body;
  try {
    const queryParams = new URLSearchParams({
      ids: source,
      vs_currencies: target,
      precision: "full",
    });

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?${queryParams}&x_cg_demo_api_key=${process.env.CG_API_KEY}`,
      {
        method: "GET",
      }
    );
    const parsedData: CryptoConversionData = await response.json();
    const resultAmount = parsedData[source][target] * amount;
    res.json({ resultAmount: resultAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error!");
  }
};

export default convertCurrency;

interface RequestBody {
  source: string;
  target: string;
  amount: number;
}
