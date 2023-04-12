import { Tabs } from "./Tabs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Tabs />", () => {
  it("renders without crashing", () => {
    render(<Tabs />);
  });

  it("switches tabs when clicked", async () => {
    render(<Tabs />);

    userEvent.click(
      await screen.findByRole("tab", { name: "Password", selected: false })
    );

    // 👇 Assert DOM structure
    await expect(
      await screen.findByRole("button", {
        name: "Change password",
      })
    ).toBeInTheDocument();
  });
});
