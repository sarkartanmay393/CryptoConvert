import { Request, Response } from "express";
import Dummy from "../utils/dummy.json";

const getCryptocurrencies = async (req: Request, res: Response) => {
  try {
    // const response = await fetch(
    //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    //   {
    //     method: "GET",
    //     headers: {
    //       "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY || "",
    //     },
    //   }
    // );

    // const parsedData: CryptoData = await response.json();
    // const formatedCurrencies = parsedData.data.map((d: Cryptocurrency) => ({
    //   id: d.id,
    //   name: d.name,
    //   symbol: d.symbol,
    //   slug: d.slug,
    //   cmc_rank: d.cmc_rank,
    //   last_updated: d.last_updated,
    //   quote: {
    //     USD: {
    //       price: d.quote.USD.price,
    //     },
    //   },
    // }));

    res.json({
      message: "All cryptocurrencies data fetched!",
      data: Dummy,
    });
  } catch (err) {
    res.json({ message: "operation failed for some reason" });
  }
};

export default getCryptocurrencies;
