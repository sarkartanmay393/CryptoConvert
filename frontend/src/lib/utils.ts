import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CryptoCurrency, FormType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4321"
    : "https://crypto-convert-szaq.vercel.app";

// export const convertToObjectOfObjects = (arr: CryptoCurrency[]) => {
//   return arr.reduce((acc, obj) => {
//     acc[obj.symbol] = obj;
//     return acc;
//   }, {name: obj});
// };

export const disableConvertButton = (
  targetLoading: boolean,
  form: FormType
) => {
  if (targetLoading) {
    return true;
  }

  if (
    form.getValues("source").length > 1 &&
    form.getValues("target").length > 1 &&
    form.getValues("amount") > 0
  ) {
    return false;
  }

  return true;
};

export const getSelectionValues = ({
  crypto,
  fiat,
  form,
  currencyHelper,
}: args) => {
  const exactHelperObj = currencyHelper.find(
    (c) => c.symbol.toLowerCase() === form.watch("target")
  );
  const currentSelectedTarget = {
    symbol:
      (fiat.length > 0 && fiat.find((c) => c === form.watch("target"))) || "",
    icon: exactHelperObj?.icon,
    name: exactHelperObj?.name || "",
  };
  const currentSelectedSource =
    (crypto.length > 0 && crypto.find((c) => c.id === form.watch("source"))) ||
    null;

  return { currentSelectedSource, currentSelectedTarget };
};

type args = {
  crypto: CryptoCurrency[];
  fiat: string[];
  form: FormType;
  currencyHelper: {
    Flag: string;
    CountryName: string;
    name: string;
    icon: string;
    symbol: string;
  }[];
};
