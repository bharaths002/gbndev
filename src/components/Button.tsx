
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 text-sm tracking-wide";
  
  const variants = {
    primary: "bg-obsidian text-white hover:bg-crystal hover:shadow-lg shadow-black/10",
    outline: "border border-obsidian/20 text-obsidian hover:bg-obsidian hover:text-white",
    ghost: "text-obsidian/60 hover:text-obsidian hover:bg-black/5"
  };

  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
