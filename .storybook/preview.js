import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { ThemeProvider } from "styled-components";
import Theme from "../src/shared/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [Theme]));
