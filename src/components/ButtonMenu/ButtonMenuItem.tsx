import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textDisabled)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
    color: ${({ theme, variant }) => (variant !== variants.SUBTLE ? theme.colors.primary : theme.colors.contrast)};
  }
`;

const ActiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: ${({ theme, variant }) => (variant !== variants.SUBTLE ? theme.colors.primary : 'transparent')};
  color: ${({ theme }) => theme.colors.contrast};
  &:hover:not(:disabled):not(:active) {
    background-color: ${({ theme, variant }) => (variant !== variants.SUBTLE ? theme.colors.primary || 'transparent' : 'transparent')};
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <ActiveButton forwardedAs={as} variant={variant} {...props}/>;
};

export default ButtonMenuItem;
