import { HttpResponse, http } from "msw";
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      { id: 1, name: "Tom", username: "user1", email: "user1@test.com" },
      { id: 2, name: "Jerry", username: "user2", email: "user2@test.com" },
      { id: 3, name: "Smith", username: "user3", email: "user3@test.com" },
      { id: 4, name: "Alex", username: "user4", email: "user4@test.com" },
    ]);
  }),
];
