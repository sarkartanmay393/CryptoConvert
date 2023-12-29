import { Request, Response } from "express";

const getCryptocurrencies = async (req: Request, res: Response) => {
  try {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY || "",
        },
      }
    );

    const parsedData: CryptoData = await response.json();
    const formatedCurrencies = parsedData.data.map((d: Cryptocurrency) => ({
      id: d.id,
      name: d.name,
      symbol: d.symbol,
      slug: d.slug,
      cmc_rank: d.cmc_rank,
      last_updated: d.last_updated,
      quote: {
        USD: {
          price: d.quote.USD.price,
        },
      },
    }));


    res.json({
      message: "All cryptocurrencies data fetched!",
      data: formatedCurrencies,
    });
  } catch (err) {
    res.json({ message: "operation failed for some reason" });
  }
};

export default getCryptocurrencies;

interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  last_updated: string;
  quote: {
    USD: {
      price: number;
    };
  };
}

interface CryptoData {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
    elapsed: number;
    credit_count: number;
    notice: string | null;
    total_count: number;
  };
  data: [
    {
      id: number;
      name: string;
      symbol: string;
      slug: string;
      num_market_pairs: number;
      date_added: string;
      tags: string[];
      max_supply: number;
      circulating_supply: number;
      total_supply: number;
      infinite_supply: boolean;
      platform: null;
      cmc_rank: number;
      self_reported_circulating_supply: null;
      self_reported_market_cap: null;
      tvl_ratio: null;
      last_updated: string;
      quote: {
        USD: {
          price: number;
          volume_24h: number;
          volume_change_24h: number;
          percent_change_1h: number;
          percent_change_24h: number;
          percent_change_7d: number;
          percent_change_30d: number;
          percent_change_60d: number;
          percent_change_90d: number;
          market_cap: number;
          market_cap_dominance: number;
          fully_diluted_market_cap: number;
        };
      };
    }
  ];
}
