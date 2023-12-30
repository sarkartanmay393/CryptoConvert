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
  icon?: string;
}

export interface Faitcurrency {
  Flag: string;
  CountryName: string;
  name: string;
  icon: string;
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
