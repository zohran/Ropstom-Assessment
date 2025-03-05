import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "btn font-frank rounded-md transition-colors flex items-center space-x-2 group";
  const variantStyles = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white px-6 py-3",
    secondary: "bg-white hover:bg-gray-50 text-teal-500 border border-teal-500 px-6 py-3"
  };
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;