const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

require("dotenv").config();

async function setupDb() {
  await mongoose.connect(process.env.ATLAS_URI_TEST);
}

describe("GET /api/products", function () {
  const OLD_ENV = process.env;
  let testProductId = "";

  process.env.NODE_ENV = "test";

  beforeAll(setupDb);

  afterAll(async function () {
    process.env = { ...OLD_ENV };
    await mongoose.connection.close();
  });

  test("Should create a new product", async function () {
    const res = await request(app)
      .post("/products/register")
      .send({
        productName: "Test product",
        category: "furniture",
        subCategory: "table",
        price: 120,
        sale: 0,
        quantity: 35,
        createdBy: {
          userName: "Cimi",
          userId: "alallaallalala",
        },
      });

    testProductId = res.body.productId;
    expect(res.statusCode).toBe(200);
  });

  test("Should return all products", async function () {
    const res = await request(app).get("/products");

    expect(res.statusCode).toBe(200);
  });

  test("Should return all products that will contain the filtered values", async function () {
    const res = await request(app)
      .get("/products")
      .query({ category: "furniture" });

    expect(res.statusCode).toBe(200);
  });

  test("Should find a product by productId", async function () {
    const res = await request(app).get(`/products/find/${testProductId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.productId).toBe(testProductId);
  });

  test("Should delete a product", async function () {
    const res = await request(app).del(`/products/del/${testProductId}`);

    expect(res.statusCode).toBe(200);
  });
});
