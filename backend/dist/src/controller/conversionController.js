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
const convertCurrency = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { symbol, amount, convert } = req.body;
    try {
        const queryParams = new URLSearchParams({
            amount: amount.toString(),
            symbol: symbol,
            convert: convert,
        });
        const response = yield fetch(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?${queryParams}`, {
            method: "GET",
            headers: {
                "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY || "",
            },
        });
        const parsedData = yield response.json();
        res.json({
            message: `Convert ${amount} ${symbol} to ${convert}`,
            data: parsedData.data,
        });
    }
    catch (error) {
        res.json({ message: "conversion fialed" });
    }
});
exports.default = convertCurrency;
