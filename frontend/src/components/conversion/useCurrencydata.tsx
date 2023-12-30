import { useState } from "react";
import { ConversionData, Cryptocurrency } from "@/lib/types";
import fiatCurrencies from "@/currenices.json";
import useCBForm from "./useCBForm";

export default function useCurrencydata() {
  const { form } = useCBForm();
  const [crypto, setCrypto] = useState<Cryptocurrency[]>([]);
  const [targetFactor, setTargetFactor] = useState<number>(1);

  const loadCrypto = async () => {
    try {
      const response = await fetch("http://localhost:4321/api/currencies", {
        method: "GET",
      });
      const parsedData = await response.json();
      setCrypto(parsedData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDiffCurrencyFactor = async (convertTo: string) => {
    try {
      const reqBody = {
        convert: convertTo,
        amount: form.getValues("amount"),
        symbol: "usd",
      };
      const response = await fetch("http://localhost:4321/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const parsedData = await response.json();
      const conversionData: ConversionData = parsedData.data[0];
      const exactQuota = conversionData.quote[convertTo.toUpperCase()];
      setTargetFactor((tf) => exactQuota.price || tf);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    crypto,
    setCrypto,
    loadCrypto,
    fiatCurrencies,
    fetchDiffCurrencyFactor,
    targetFactor,
  };
}
