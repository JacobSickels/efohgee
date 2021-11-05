import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components/Button/Button";
import { Select } from "../components/Select/Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
const TemplateWithButtonRight: ComponentStory<typeof Select> = (args) => (
  <>
    <Select {...args} />
    <Button label='Save' fieldLeft primary />
  </>
);
const TemplateWithButtonLeft: ComponentStory<typeof Select> = (args) => (
  <>
    <Button label='Save' fieldRight primary />
    <Select {...args} />
  </>
);

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
];

export const Normal = Template.bind({});
Normal.args = {
  id: "normal-select",
  label: "Description",
  value: "Here is an example description",
  options,
};

export const WithButtonRight = TemplateWithButtonRight.bind({});
WithButtonRight.args = {
  id: "with-button-right-select",
  label: "Description",
  buttonRight: true,
  fieldLeft: true,
  options,
};

export const WithButtonLeft = TemplateWithButtonLeft.bind({});
WithButtonLeft.args = {
  id: "with-button-left-select",
  label: "Description",
  buttonLeft: true,
  fieldRight: true,
  options,
};
