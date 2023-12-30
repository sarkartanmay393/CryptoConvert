"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dummy_json_1 = __importDefault(require("../utils/dummy.json"));
const getCryptocurrencies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            data: dummy_json_1.default,
        });
    }
    catch (err) {
        res.json({ message: "operation failed for some reason" });
    }
});
exports.default = getCryptocurrencies;
