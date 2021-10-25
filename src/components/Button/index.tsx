import styles from "./button.module.scss";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ButtonVariant, Size } from "../../utils/types";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  variant?: ButtonVariant;
  size?: Size;
};

export const Button = ({ label, variant, size, ...props }: ButtonProps) => {
  const classes = `${styles.button} ${
    styles[`button--${variant || "primary"}`]
  } ${styles[`button--${size || "sm"}`]}`;
  return (
    <button {...props} className={classes}>
      {label}
    </button>
  );
};
