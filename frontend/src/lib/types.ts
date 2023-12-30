export interface Cryptocurrency {
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

export interface Faitcurrency {
  name: string;
  symbol: string;
}

export interface ConversionData {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  last_updated: string;
  quote: {
    [key: string]: {
      price: number;
      last_updated: string;
    };
  };
}
