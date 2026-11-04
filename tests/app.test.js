const request = require("supertest");

const app = require("../app");

describe("CI/CD Application API Tests", () => {

    test("GET / should return correct application response", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            message: "Hello! CI/CD Pipeline Practice",
            status: "Application is running successfully",
            developer: "Ahsan"
        });

    });

    test("GET /health should return healthy status", async () => {

        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            status: "healthy"
        });

    });

    test("GET /invalid should return 404", async () => {

        const response = await request(app).get("/invalid");

        expect(response.statusCode).toBe(404);

    });

});