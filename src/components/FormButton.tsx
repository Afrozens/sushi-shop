import { ReactNode } from "react";

type AttributeProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonProps = {
  className?: string;
  children: ReactNode | ReactNode[];
} & AttributeProps

const FormButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`form-btn ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default FormButton;