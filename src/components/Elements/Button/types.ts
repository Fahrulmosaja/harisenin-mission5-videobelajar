import type React from "react";

export interface ButtonProps {
  className?: string;
  variant: "btn-default" | "btn-primary" | "btn-secondary" | "btn-tertiary" | "btn-quaternary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}