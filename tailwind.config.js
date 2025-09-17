module.exports = {
  important: true, // Ensures Tailwind styles have higher priority
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: { extend: {
   fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
  } },
  plugins: [],
};