"use client";

import { RegisterOptions, UseFormRegister, FieldValues } from "react-hook-form";

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  className: string;
  register?: UseFormRegister<FieldValues>;
  name?: string;
  rules?: RegisterOptions;
} & AttributeProps

const FormInput = ({
  register,
  name,
  className,
  rules,
  ...props
}: InputProps) => {
  return (
    <input
      className={`form-input ${className || ""}`}
      {...props}
      type=""
      {...(register && register(name as string, rules))}
    />
  );
};

export default FormInput;
