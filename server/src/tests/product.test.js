const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

require("dotenv").config();

async function setupDb() {
  await mongoose.connect(process.env.ATLAS_URI_TEST);
}

describe("GET /api/products", function () {
  const OLD_ENV = process.env;
  process.env.NODE_ENV = "test";

  beforeAll(setupDb);

  afterAll(async function () {
    process.env = { ...OLD_ENV };
    await mongoose.connection.close();
  });

  test("Should return all products", async function () {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
    // expect(res.body.length).toBeGreaterThan(0);
  });
});
