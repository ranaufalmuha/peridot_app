export const content = ["./src/**/**/**/**/**/**/*.{html,js,jsx}"];
export const theme = {
  extend: {
    colors: {
      "myprimaryColor": "#4D8A6A",
      "myprimaryColor-opacity50": "#90EE9012C",
      "myseccondaryColor": "#90EE90",

      "mydarkColor": "#121212",
      "myseccondaryDarkColor": "#212121",
      "myaccentDarkColor": "#282828",

      "textDisable": "#696969",

      "darkRed": "#2f1313",
      "darkBlue": "#042648",
      "darkPink": "#3e0d33",
      "darkOrange": "#461300",
      "darkPurple": "#1f2452",
      "darkOcean": "#003048",
    },
    animation: {
      "loop-scroll": "loop-scroll 20s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [];