import request from "supertest";
import app from "../src/app";

describe("Fetched realtime currencies", () => {
  test("Should return success code and currency data", () => {
    return request(app).get("/api/currencies").expect(200);
  });
});
