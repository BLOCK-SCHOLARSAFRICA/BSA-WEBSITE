

import React from "react";

const TransparentButton = ({
  children,
  onClick,
  size = "md",
  className = "",
  disabled = false,
  ...rest
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={[
        "inline-flex items-center justify-center",
        "bg-transparent", // no background
        "border border-white", // white border
        "text-white", // white text
        "rounded-full", // radius (change to rounded-md, rounded-full etc.)
        "transition-shadow transform duration-150",
        "focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        sizeClasses,
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TransparentButton
