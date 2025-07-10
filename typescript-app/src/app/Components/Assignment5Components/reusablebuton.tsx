'use client';

import { useState } from 'react';

const styles = {
  base: {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  variants: {
    primary: {
      backgroundColor: '#0070f3',
    },
    secondary: {
      backgroundColor: '#6c757d',
    },
    danger: {
      backgroundColor: '#dc3545',
    },
  },
  hoverColors: {
    primary: '#0059c1',
    secondary: '#545b62',
    danger: '#b52a37',
  },
};

// Define the possible variants as a string literal union
type ButtonVariant = 'primary' | 'secondary' | 'danger';

// Define the Button component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant; // variant prop is optional and will default to 'primary'
  style?: React.CSSProperties; // allow custom styles passed via props
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, style = {}, ...props }) => {
  const [hovered, setHovered] = useState(false);

  // Combine the base styles, variant styles, and any custom styles
  const combinedStyle: React.CSSProperties = {
    ...styles.base,
    ...styles.variants[variant],
    ...(hovered && { backgroundColor: styles.hoverColors[variant] }),
    ...style, // Allow custom styles via props
  };

  return (
    <button
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};
