describe("CI/CD Application Tests", () => {

    test("Application should return correct message", () => {

        const message = "Hello! CI/CD Pipeline Practice";

        expect(message).toBe("Hello! CI/CD Pipeline Practice");

    });

    test("Health status should be healthy", () => {

        const status = "healthy";

        expect(status).toBe("healthy");

    });

});