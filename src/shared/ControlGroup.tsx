import styled from "styled-components";

export const ControlGroup = styled.div`
  display: inline-block;
  &:focus-within > label {
    color: ${(props) => props.theme.color.primary.main};
  }

  &:focus-within > input {
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme.color.primary.light};
  }
`;
