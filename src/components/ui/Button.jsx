import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant, size, children, className, ...props }) => {
  const baseStyle =
    "font-bold rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    success: "bg-green-500 hover:bg-green-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
    light: "bg-white hover:bg-gray-100 text-black border border-gray-300",
  };

  const sizeStyles = {
    small: "text-xs py-1 px-2",
    medium: "text-sm py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  const variantStyle = variantStyles[variant] || variantStyles.primary;
  const sizeStyle = sizeStyles[size] || sizeStyles.medium;

  let combinedClassName = `${baseStyle} ${variantStyle} ${sizeStyle} ${
    className || ""
  }`;

  if (props.href) {
    return (
      <a className={combinedClassName} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

export default Button;
