const white = "#FFFFFF";
const black = "#020f29";
const gray = "#F8F8F9";


const themeLight = {
  background: gray,
  body: black
};

const themeDark = {
  background: black,
  body: white,
};

const theme = mode => (mode === "dark" ? themeLight : themeDark);

export default theme;