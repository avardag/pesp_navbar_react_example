import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div``;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0.5em 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.5em;
  cursor: pointer;
  background-color: #83d7f8;
  background-image: linear-gradient(to right, transparent 0%, #15a5c2 100%);
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #50c2c2;
  }
  margin: 0 0.5rem;
`;
export default function Accessibility() {
  return (
    <AccessibilityContainer>
      <LoginButton>Register</LoginButton>
      <LoginButton>Log in</LoginButton>
    </AccessibilityContainer>
  );
}
