import React from "react";

export interface InputProps {
  className?: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface LabelProps {
  className?: string;
  htmlFor: string;
  text: string;
  isIcon?: boolean
}

export interface FormInputProps {
  className?: string;
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}


