module.exports = {
  content: [
    //where we use it
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", //브라우저 설정(media)이 아닌 직접 다크모드를 설정 하고 싶다면?
  plugins: [require("@tailwindcss/forms")],
};
