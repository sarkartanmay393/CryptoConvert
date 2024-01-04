import { Request, Response } from "express";
import { CryptoData } from "src/utils/types";

const getCryptocurrencies = async (req: Request, res: Response) => {
  try {
    // Fetch data from Coingecko API for cryptocurrencies
    const queryParams = new URLSearchParams({
      vs_currency: "usd",
      per_page: "100",
      page: "1",
      sparkline: "false",
      order: "market_cap_desc",
      locale: "en",
    });
    const cryptoResponse = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?${queryParams}&x_cg_demo_api_key=${process.env.CG_API_KEY}`,
      {
        method: "GET",
      }
    );
    const parsedCrypto: CryptoData[] = await cryptoResponse.json();
    const cryptocurrencies = parsedCrypto.map((currency) => ({
      type: "crypto",
      id: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      image: currency.image,
      current_price: currency.current_price,
      market_cap_rank: currency.market_cap_rank,
    }));

    // Fetch data from Coingecko API for supported currencies
    const currencyResponse = await fetch(
      `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`,
      {
        method: "GET",
      }
    );
    const parsedCurrencies: string[] = await currencyResponse.json();
    res.json({
      cryptos: cryptocurrencies,
      currencies: parsedCurrencies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server error!");
  }
};

export default getCryptocurrencies;
