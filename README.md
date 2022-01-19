### update project react verion

```bash
npm i next@latest react@rc react-dom@rc
```

#### set up style tools

```bash
npm i -D tailwindcss postcss autoprefixer
# and
npx tailwind init -p
```

create and update tailwind.config.js

```js
module.exports = {
  content: [
    //where we use it
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // default media
  plugins: [],
};
```
