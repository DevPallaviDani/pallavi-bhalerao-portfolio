export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation:{
        float: "float 4s ease-in-out infinite"
      },
      keyframes:{
        float:{
          "0%, 100%" : { transform: "translateY(0px)" },
          "50%" : { transform: "translateY(-20px)" }  
        }
      },
      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        darkBg: "#0F172A",
        lightBg: "#F9FAFB"
      }
    }
  },
  plugins: [],
}