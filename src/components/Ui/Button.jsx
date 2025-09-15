import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonClasses = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "hover:opacity-90 focus:ring-blue-500",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
        outline:
          "border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500",
      },
      size: {
        small: "text-sm px-3 py-1.5",
        medium: "text-base px-4 py-2",
        large: "text-lg px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "VIEW MORE",
  text_font_size = "18",
  text_font_family = "DM Sans",
  text_font_weight = "500",
  text_line_height = "24px",
  text_text_align = "left",
  text_color = "#ffffff",
  fill_background_color = "#6c0031",
  border_border = "1 solid #6c0031",
  border_border_radius = "30px",
  effect_box_shadow = "0px 2px 4px #6c00313f",

  // Optional parameters (no defaults)
  layout_align_self,
  layout_width,
  padding,
  position,
  margin,

  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidAlignSelf =
    layout_align_self &&
    typeof layout_align_self === "string" &&
    layout_align_self?.trim() !== "";
  const hasValidWidth =
    layout_width &&
    typeof layout_width === "string" &&
    layout_width?.trim() !== "";
  const hasValidPadding =
    padding && typeof padding === "string" && padding?.trim() !== "";
  const hasValidMargin =
    margin && typeof margin === "string" && margin?.trim() !== "";
  const hasValidPosition =
    position && typeof position === "string" && position?.trim() !== "";

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidAlignSelf ? `self-${layout_align_self}` : "",
    hasValidWidth ? `w-[${layout_width}]` : "",
    hasValidPadding ? `p-[${padding}]` : "",
    hasValidMargin ? `m-[${margin}]` : "",
    hasValidPosition ? position : "",
  ]
    ?.filter(Boolean)
    ?.join(" ");

  // Map font size to Tailwind class or use custom value
  const getFontSizeClass = (size) => {
    const sizeMap = {
      15: "text-xs",
      16: "text-sm",
      18: "text-base",
      20: "text-lg",
      22: "text-2xl",
      24: "text-4xl",
    };
    return sizeMap?.[size] || `text-[${size}px]`;
  };

  // Map font weight to Tailwind class
  const getFontWeightClass = (weight) => {
    const weightMap = {
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
    };
    return weightMap?.[weight] || `font-[${weight}]`;
  };

  // Map colors to Tailwind classes or use custom values
  const getTextColorClass = (color) => {
    const colorMap = {
      "#ffffff": "text-text-white",
      "#6c0031": "text-primary-burgundyDark",
    };
    return colorMap?.[color] || `text-[${color}]`;
  };

  const getBackgroundColorClass = (color) => {
    const colorMap = {
      "#6c0031": "bg-primary-burgundyDark",
      "#fe6906": "bg-secondary-orange",
    };
    return colorMap?.[color] || `bg-[${color}]`;
  };

  // Build component classes
  const componentClasses = [
    getFontSizeClass(text_font_size),
    getFontWeightClass(text_font_weight),
    getTextColorClass(text_color),
    getBackgroundColorClass(fill_background_color),
    `rounded-[${border_border_radius}]`,
    `shadow-[${effect_box_shadow}]`,
    `border-[${border_border?.replace("solid", "")?.trim()}]`,
    `text-${text_text_align}`,
    optionalClasses,
  ]
    ?.filter(Boolean)
    ?.join(" ");

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={{
        fontFamily: text_font_family,
        lineHeight: text_line_height,
      }}
      className={twMerge(
        buttonClasses({ variant, size }),
        componentClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
