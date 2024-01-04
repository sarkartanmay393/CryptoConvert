import { useEffect, useState } from "react";

import { baseUrl } from "@/lib/utils";
import { ConversionData, CryptoCurrency } from "@/lib/types";

export function useApi() {
  const [fiat, setFiat] = useState<string[]>([]);
  const [crypto, setCrypto] = useState<CryptoCurrency[]>([]);

  const fetchCrypto = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/currencies`, {
        method: "GET",
      });
      const parsedData: { cryptos: CryptoCurrency[]; currencies: string[] } =
        await response.json();
      setCrypto(parsedData.cryptos);
      setFiat(parsedData.currencies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  type args = {
    source: string;
    target: string;
    amount: number;
  };
  const fetchConversionAmount = async ({ source, target, amount }: args) => {
    try {
      const reqBody = {
        source,
        amount,
        target,
      };

      const response = await fetch(`${baseUrl}/api/convert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const parsedData: ConversionData = await response.json();
      return parsedData;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    crypto,
    fiat,
    fetchConversionAmount,
  };
}
