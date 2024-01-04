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
    const { source, target, amount } = req.body;
    try {
        const queryParams = new URLSearchParams({
            ids: source,
            vs_currencies: target,
            precision: "full",
        });
        const response = yield fetch(`https://api.coingecko.com/api/v3/simple/price?${queryParams}&x_cg_demo_api_key=${process.env.CG_API_KEY}`, {
            method: "GET",
        });
        const parsedData = yield response.json();
        const resultAmount = parsedData[source][target] * amount;
        res.json({ resultAmount: resultAmount });
    }
    catch (error) {
        console.error(error);
        res.status(500).json("Internal server error!");
    }
});
exports.default = convertCurrency;
