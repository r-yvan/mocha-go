/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sregular: ["Sora-Regular"],
        ssemibold: ["Sora-SemiBold"],
        sbold: ["Sora-Bold"],
        slight: ["Sora-Light"],
        sthin: ["Sora-Thin"],
        sextralight: ["Sora-ExtraLight"],
      },
    },
  },
  plugins: [],
};
