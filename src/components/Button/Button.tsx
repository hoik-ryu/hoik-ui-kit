import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import "../../theme/tokens.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};
