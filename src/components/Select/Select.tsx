import React from "react";
import styled from "styled-components";
import { ControlGroup } from "../../shared/ControlGroup";
import { StyledLabel } from "../../shared/Label";

export interface TextFieldProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * The value of the text field, used to make this component controlled
   */
  value: string;
  /**
   * Change handler
   */
  onChange: () => void;
  /**
   * Used to match label with input
   * For accessibility reasons, this is required
   */
  id: string;
  /**
   * Array of options for the select
   */
  options: Array<{ label: string; value: string | number }>;
}

const StyledSelect = styled.select<{ buttonRight?: boolean; buttonLeft?: boolean }>`
  border-color: ${(props) => props.theme.color.primary.main};
  padding: 1rem;
  outline: 0;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  font-size: 1rem;
  border-width: 1px;
  font-family: "Raleway", sans-serif;

  ${(props) => (props.buttonRight ? `border-top-right-radius: 0; border-bottom-right-radius: 0;` : "")}

  ${(props) => (props.buttonLeft ? `border-top-left-radius: 0; border-bottom-left-radius: 0;` : "")}

	&:focus {
    background-color: ${(props) => props.theme.color.gray[1]};
  }
`;

const StyledOption = styled.option`
  &:hover {
    color: red;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Select = ({ id, label, options, ...props }: TextFieldProps) => {
  return (
    <ControlGroup>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect id={id} {...props}>
        {options.map((option) => (
          <StyledOption value={option.value}>{option.label}</StyledOption>
        ))}
      </StyledSelect>
    </ControlGroup>
  );
};
