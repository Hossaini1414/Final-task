/* @type
{import('tailwindcss').Config}*/
module.exports = {
  content: ["./public/**/*.{html,js}", "./css/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        fontOne: ['FontOne', 'serif'],
        font2: ['Font2', 'serif'],
        font3: ['Font3', 'serif'],
        font4: ['Font4', 'serif'],
        font5: ['Font5', 'serif'],
        font6: ['Font6', 'serif'],
        font7: ['Font7', 'serif'],
        font8: ['Font8', 'serif'],

      }
    },
  },
  plugins: [],
}

// start => npx tailwindcss -i ./css/main.css -o ./public/assets/css/build/tailwind.css --watch
// live server => npx live-server ./public