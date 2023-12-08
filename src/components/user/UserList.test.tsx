import ServerUserList from "./ServerUserList";
import UserList from "./UserList";
import { findByRole, render, screen } from "@testing-library/react";

describe("<UserList />", () => {
  test("renders correctly", () => {
    render(<UserList />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test("check user list fetched", async () => {
    render(<UserList />);
    const userList = await screen.findAllByRole("listitem");
    expect(userList).toHaveLength(4);
  });
});

describe("<ServerUserList />", () => {
  test("check user list fetched", async () => {
    render(<ServerUserList />);
    const userList = await screen.findAllByRole("listitem");
    expect(userList).toHaveLength(4);
  });
});
