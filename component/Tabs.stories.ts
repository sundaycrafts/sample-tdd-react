import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  /* See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const SwitchTabOnClick: Story = {
  play: async ({ canvasElement }) => {
    // to get modal element
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.click(
      await canvas.findByRole("tab", { name: "Password", selected: false })
    );

    // 👇 Assert DOM structure
    await expect(
      await canvas.findByRole("button", {
        name: "Change password",
      })
    ).toBeInTheDocument();
  },
};
