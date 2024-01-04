"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe("Convert USD to INR realtime", () => {
    test("Should return success code and exchage rate", () => {
        const reqBody = {
            amount: 1,
            source: "bitcoin",
            target: "inr",
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/convert")
            .send(reqBody)
            .expect(200);
    });
});
