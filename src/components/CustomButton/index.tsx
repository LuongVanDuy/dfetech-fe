"use client";

import { ButtonStyled } from "./styled";
import cx from "classnames";

export default function CustomButton({
  children,
  className,
  type = "primary",
  onClick,
  disabled = false,
  onEnter,
  isLoading,
}: {
  children: any;
  className?: string;
  type?: "primary" | "icon" | "none" | "contact-home";
  onClick?: (value?: any) => void;
  disabled?: boolean;
  onEnter?: () => void;
  isLoading?: boolean;
}) {
  return (
    <ButtonStyled>
      <button
        onClick={onClick}
        className={cx(className, type)}
        disabled={disabled}
        onKeyUp={(e) => {
          if (e.keyCode === 13 && onEnter) {
            onEnter();
          }
        }}
      >
        {isLoading ? "Loading..." : children}
      </button>
    </ButtonStyled>
  );
}
