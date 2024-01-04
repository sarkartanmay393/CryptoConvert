import { UseFormReturn } from "react-hook-form";

export type CryptoCurrency = {
  type: string;
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
};

export type ConversionRequestData = {
  source: string;
  target: string;
  amount: number;
};

export type ConversionData = {
  resultAmount: number;
};

export type FormType = UseFormReturn<
  {
    source: string;
    target: string;
    amount: number;
    resultAmount: number;
  },
  any,
  undefined
>;
