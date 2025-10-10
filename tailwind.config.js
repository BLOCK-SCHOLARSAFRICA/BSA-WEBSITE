// /** @type {import('tailwindcss').Config} */
// export default {
//   content:  ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors : {
//         customBrown: "#720034",
//       },
//       animation: {
//         scroll: "scroll 40s linear infinite",
//       },
//       keyframes: {
//         scroll: {
//           "0%": { transform: "translateX(100%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
        
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        "primary-burgundy": "#720034",
        "primary-burgundy-light": "#d50966",
        "primary-burgundy-dark": "#6c0031",
        "primary-burgundy-darker": "#650330",
        // Secondary Colors
        "secondary-orange": "#fe6906",
        "secondary-pink": "#eb86b4",
        "secondary-blue": "#cce1fc",
        // Text Colors
        "text-primary": "#242424",
        "text-secondary": "#262424",
        "text-muted": "#6b6969",
        "text-light": "#9e9e9e",
        "text-lighter": "#dadada",
        "text-lightest": "#ebebeb",
        "text-white": "#ffffff",
        // Background Colors
        "bg-primary": "#ffffff",
        "bg-dark": "#0c1725",
        "bg-dark-secondary": "#222121",
        "bg-light-gray": "#f2f0f0",
        "bg-medium-gray": "#b1b1b1",
        "bg-light-gray-secondary": "#ccc4c4",
        // Border Colors
        "border-primary": "#720034",
        "border-secondary": "#6c0031",
        "border-light": "#939191",
        "border-lighter": "#d9d9d9",
        "border-accent": "#d50966",
        "border-white": "#ffffff",
        // Component Specific Colors (keep your customBrown if needed)
        customBrown: "#720034",
        "button-primary-bg": "#720034",
        "button-secondary-bg": "#fe6906",
        "button-tertiary-bg": "#6c0031",
        "button-quaternary-bg": "#650330",
        "input-bg": "#ffffff",
        "line-bg-primary": "#b1b1b1",
        "line-bg-secondary": "#f2f0f0",
      },
      fontSize: {
        xs: "15px",
        sm: "16px",
        base: "18px",
        lg: "20px",
        xl: "21px",
        "2xl": "22px",
        "3xl": "23px",
        "4xl": "24px",
        "5xl": "25px",
        "6xl": "30px",
        "7xl": "32px",
        "8xl": "36px",
        "9xl": "40px",
        "10xl": "42px",
        "11xl": "50px",
        "12xl": "55px",
        "13xl": "60px",
        "14xl": "64px",
        "15xl": "70px",
        "16xl": "90px",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        1: "4px",
        2: "6px",
        3: "8px",
        4: "10px",
        5: "12px",
        6: "14px",
        7: "16px",
        8: "18px",
        9: "20px",
        10: "22px",
        11: "24px",
        12: "26px",
        13: "28px",
        14: "30px",
        15: "32px",
        16: "34px",
        17: "36px",
        18: "38px",
        19: "40px",
        20: "42px",
      },
      borderRadius: {
        xs: "4px",
        sm: "5px",
        md: "10px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "22px",
        "4xl": "24px",
        "5xl": "26px",
        "6xl": "30px",
        "7xl": "32px",
        "8xl": "50px",
        "9xl": "54px",
        "10xl": "62px",
        full: "142px",
      },
      // Your existing animation and keyframes
      animation: {
        scroll: "scroll 40s linear infinite",
        slideInLeft: "slideInLeft 0.7s ease-out",
        slideInRight: "slideInRight 0.7s ease-out",
        slideInBottom: "slideInBottom 0.7s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },

        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

// For CommonJS compatibility (e.g., older CRA), uncomment below and comment out export default:
// module.exports = { ... };  // Paste the entire config object here
