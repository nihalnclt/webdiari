import request from "supertest";
import { app } from "../../../../../index";

it("should return 200 success", async () => {
    const response = await request(app).get("/api/v1/users").send().expect(200);
    console.log(response.body);
});
