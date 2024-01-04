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
Object.defineProperty(exports, "__esModule", { value: true });
const getCryptocurrencies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const cryptoResponse = yield fetch(`https://api.coingecko.com/api/v3/coins/markets?${queryParams}&x_cg_demo_api_key=${process.env.CG_API_KEY}`, {
            method: "GET",
        });
        const parsedCrypto = yield cryptoResponse.json();
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
        const currencyResponse = yield fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`, {
            method: "GET",
        });
        const parsedCurrencies = yield currencyResponse.json();
        res.json({
            cryptos: cryptocurrencies,
            currencies: parsedCurrencies,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json("Internal server error!");
    }
});
exports.default = getCryptocurrencies;
