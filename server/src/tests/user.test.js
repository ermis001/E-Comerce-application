const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

require("dotenv").config();

async function setupDb() {
  await mongoose.connect(process.env.ATLAS_URI_TEST);
}

describe("GET /api/users", () => {
  const OLD_ENV = process.env;
  let cimiUserId = "";
  process.env.NODE_ENV = "test";

  beforeAll(setupDb);

  afterAll(async () => {
    process.env = { ...OLD_ENV };
    await mongoose.connection.close();
  });

  test("Should return all users", async function () {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
  });

  test("Should return all users that will contain the filtered values", async function () {
    const res = await request(app)
      .get("/users")
      .query({ userStatus: "member", isPrivate: false });

    expect(res.statusCode).toBe(200);
  });

  test("Should create new user", async function () {
    const res = await request(app).post("/users/register").send({
      userName: "Cimi",
      email: "cimi@email.com",
      userStatus: "member",
      password: "Cimi123!",
    });

    cimiUserId = res.body.userId;

    expect(res.statusCode).toBe(200);
  });

  test("Should log in user", async function () {
    const res = await request(app).post("/users/login").send({
      userName: "Cimi",
      email: "cimi@email.com",
      password: "Cimi123!",
    });

    expect(res.statusCode).toBe(200);
  });

  test("Should find in user by id", async function () {
    const res = await request(app).get(`/users/find/${cimiUserId}`);
    
    expect(res.statusCode).toBe(200);
  });

  test("Should delete user", async function () {
    const res = await request(app).del(`/users/del/${cimiUserId}`);

    expect(res.statusCode).toBe(200);
  });
});
