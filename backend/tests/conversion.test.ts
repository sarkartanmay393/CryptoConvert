import request from "supertest";
import app from "../src/app";

describe("Convert USD to INR realtime", () => {
  test("Should return success code and exchage rate", () => {
    const reqBody = {
      amount: 1,
      source: "bitcoin",
      target: "inr",
    };
    return request(app)
      .post("/api/convert")
      .send(reqBody)
      .expect(200);
  });
});
