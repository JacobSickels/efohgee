import React from "react";
import styled from "styled-components";
import Ripple from "./Ripple";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Does this button have a field to it's left
   * Used for styling
   */
  fieldLeft?: boolean;
  /**
   * Does this button have a field to it's right
   * Used for styling
   */
  fieldRight?: boolean;
}

const StyledButton = styled.button<Omit<ButtonProps, "label">>`
  background-color: ${(props) => (props.primary ? props.theme.color.primary.main : "transparent")};
  color: ${(props) => (props.primary ? props.theme.color.primary.text : props.theme.color.secondary.text)};
  border: ${(props) => `1px solid ${props.theme.color.primary.main}`};
  border-radius: ${(props) => props.theme.shape.borderRadius};

  padding: ${(props) => (props.size === "medium" ? "1rem" : props.size === "large" ? "1.5rem" : "0.75rem")};
  outline: 0;

  font-size: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  font-family: "Raleway", sans-serif;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.color.primary.light};
  }

  ${(props) =>
    props.fieldRight ? `border-top-right-radius: 0; border-bottom-right-radius: 0; border-right-width: 0;` : ""}

  ${(props) =>
    props.fieldLeft ? `border-top-left-radius: 0; border-bottom-left-radius: 0; border-left-width: 0;` : ""}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = "medium", label, ...props }: ButtonProps) => {
  return (
    <StyledButton type='button' size={size} primary={primary} {...props}>
      {label}
      <Ripple />
    </StyledButton>
  );
};
