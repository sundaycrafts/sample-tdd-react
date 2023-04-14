import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "./Dialog";

describe("<Dialog />", () => {
  it("renders without crashing", () => {
    render(<Dialog />);
  });

  it("close on save changes", async () => {
    // to get modal element
    render(<Dialog />);

    // 👇 Simulate interactions with the component
    userEvent.click(screen.getByRole("button", { name: "Edit profile" }));

    const nameInput = (await screen.findByTestId("name")) as HTMLInputElement;

    await waitFor(() => expect(() => userEvent.click(nameInput)).not.toThrow());

    userEvent.type(nameInput, "John Doe");

    const usernameInput = await screen.findByLabelText("Username");
    userEvent.clear(usernameInput);
    userEvent.type(usernameInput, "johndoe");

    userEvent.click(
      await screen.findByRole("button", { name: "Save changes" })
    );

    // 👇 Assert DOM structure
    await waitFor(() =>
      expect(
        screen.queryByRole("heading", { name: "Edit profile" })
      ).not.toBeInTheDocument()
    );
  });
});
