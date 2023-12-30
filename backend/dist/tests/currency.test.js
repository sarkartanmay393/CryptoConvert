"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe("Fetched realtime currencies", () => {
    test("Should return success code and currency data", () => {
        return (0, supertest_1.default)(app_1.default).get("/api/currencies").expect(200);
    });
});
