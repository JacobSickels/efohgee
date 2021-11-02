import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "../components/TextField/TextField";
import { Button } from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;
const TemplateWithButtonRight: ComponentStory<typeof TextField> = (args) => (
  <>
    <TextField {...args} />
    <Button label='Save' fieldLeft primary />
  </>
);
const TemplateWithButtonLeft: ComponentStory<typeof TextField> = (args) => (
  <>
    <Button label='Save' fieldRight primary />
    <TextField {...args} />
  </>
);

export const Normal = Template.bind({});
Normal.args = {
  label: "Description",
  value: "Here is an example description",
};

export const WithButtonRight = TemplateWithButtonRight.bind({});
WithButtonRight.args = {
  label: "Description",
  buttonRight: true,
  fieldLeft: true,
};

export const WithButtonLeft = TemplateWithButtonLeft.bind({});
WithButtonLeft.args = {
  label: "Description",
  buttonLeft: true,
  fieldRight: true,
};
