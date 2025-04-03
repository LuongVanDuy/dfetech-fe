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
  type?: "primary" | "icon" | "none" | "secondary" | string;
  onClick?: (value?: any) => void;
  disabled?: boolean;
  onEnter?: () => void;
  isLoading?: boolean;
}) {
  return (
    <ButtonStyled>
      <button
        onClick={onClick}
        className={cx(className, type.split(" "))}
        disabled={disabled}
        onKeyUp={(e) => {
          if (e.keyCode === 13 && onEnter) {
            onEnter();
          }
        }}
      >
        <span className="relative z-10">
          {isLoading ? "Loading..." : children}
        </span>
      </button>
    </ButtonStyled>
  );
}
