import { getAllUsers } from "./user";

describe("services/user", () => {
  test("getAllUsers", async () => {
    const users = await getAllUsers();
    expect(users).toHaveLength(4);
  });
});
