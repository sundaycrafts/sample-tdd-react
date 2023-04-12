import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  /* See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const CloseOnSaveChanges: Story = {
  play: async ({ canvasElement }) => {
    // to get modal element
    const body = within(canvasElement.ownerDocument.body);

    // 👇 Simulate interactions with the component
    await userEvent.click(body.getByText("Edit profile"));

    const nameInput = (await body.findByTestId("name")) as HTMLInputElement;

    await waitFor(() => expect(() => userEvent.click(nameInput)).not.toThrow());

    await userEvent.type(nameInput, "John Doe");

    const usernameInput = await body.findByLabelText("Username");
    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, "johndoe");

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(
      await body.findByRole("button", { name: "Save changes" })
    );

    // 👇 Assert DOM structure
    await expect(
      await body.queryByTitle("Edit profile")
    ).not.toBeInTheDocument();
  },
};

export const OpenOnClickButton: Story = {
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    // 👇 Simulate interactions with the component
    await userEvent.click(body.getByText("Edit profile"));

    await expect(
      await body.queryByRole("heading", { name: "Edit profile" })
    ).toBeInTheDocument();
  },
};
