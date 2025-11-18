import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import "../../theme/tokens.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  rounded?: "soft" | "sharp";
}

export const Button = ({
  children = "Button",
  size = "medium",
  variant = "primary",
  rounded = "soft",
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={[
        styles.button,
        styles[size],
        styles[variant],
        styles[rounded],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};
