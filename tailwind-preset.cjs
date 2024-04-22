/*eslint-env node*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          nightblack: "#232323",
          light1: "#333333",
          light2: "#666666",
          light3: "#999999",
          light4: "#CCCCCC",
          light5: "#E6E6E6",
        },
        gray: {
          DEFAULT: "#6D8591",
          light1: "#879BA5",
          light2: "#A7B6BD",
          light3: "#C7D0D5",
          light4: "#E0E5E8",
          light5: "#F0F3F4",
        },
        white: {
          DEFAULT: "#FFFFFF",
          dark1: "#F7F7F7",
          dark2: "#F0F0F0",
        },
        blue: {
          DEFAULT: "#21409A",
          light1: "#2C5498",
          light2: "#007CBD",
          light3: "#3EA6DD",
          light4: "#84C6E9",
          light5: "#E3F5FE",
        },
        bondiblue: {
          DEFAULT: "#00A6BA",
          light1: "#2EB6C6",
          light2: "#57BECF",
          light3: "#9EDCE4",
          light4: "#CAEBF0",
          light5: "#E6F5F8",
        },
        bluelagoon: {
          DEFAULT: "#007D8E",
          light1: "#2E94A2",
          light2: "#5CACB7",
          light3: "#97CAD1",
          light4: "#C6E2E5",
          light5: "#E2F0F2",
        },
        orange: {
          DEFAULT: "#EE4023",
          light1: "#EF672F",
          light2: "#F7931D",
          light3: "#F9BA6F",
          light4: "#FBD3A3",
          light5: "#FCE7CC",
        },
        red: {
          DEFAULT: "#C72026",
          light1: "#ED131B",
          light2: "#FF0000",
          light3: "#FF5C5C",
          light4: "#FFA6A6",
          light5: "#FFD6D6",
        },
        cerisered: {
          DEFAULT: "#C31F47",
          light1: "#DB284E",
          light2: "#E8768E",
          light3: "#F0A7B8",
          light4: "#F6CFD7",
          light5: "#FAE9EC",
        },
        maroon: {
          DEFAULT: "#8B0304",
          light1: "#A03031",
          light2: "#BF595B",
          light3: "#D69597",
          light4: "#E8C5C6",
          light5: "#F4E4E5",
        },
        yellow: {
          DEFAULT: "#FCB715",
          light1: "#FCC43F",
          light2: "#FCD373",
          light3: "#FDE3A5",
          light4: "#FDEFCD",
          light5: "#FEF7E8",
        },
        purple: {
          DEFAULT: "#332070",
          light1: "#562B77",
          light2: "#812E88",
          light3: "#AA248C",
          light4: "#D087C0",
          light5: "#E5BDDC",
        },
        green: {
          DEFAULT: "#006536",
          light1: "#068C45",
          light2: "#11AA3D",
          light3: "#75B72E",
          light4: "#BED82E",
          light5: "#E1EDA0",
        },
        earlsgreen: {
          DEFAULT: "#C2BB3C",
          light1: "#CDC75F",
          light2: "#DAD68A",
          light3: "#E7E4B4",
          light4: "#F1F0D6",
          light5: "#F8F8EC",
        },
        tosca: {
          DEFAULT: "#009076",
          light1: "#2EA48F",
          light2: "#67BCAD",
          light3: "#9ED4CA",
          light4: "#CAE7E2",
          light5: "#E6F4F1",
        },
        pink: {
          DEFAULT: "#CC2267",
          light1: "#EC1B7A",
          light2: "#F179AC",
          light3: "#E375AD",
          light4: "#F2C0D9",
          light5: "#F9E2ED",
        },
        forestgreen: {
          DEFAULT: "#295243",
          light1: "#2E7259",
          light2: "#1E9D6F",
          light3: "#7EBFA7",
          light4: "#A9D4C4",
          light5: "#D4EAE2",
        },
        wheatyellow: {
          DEFAULT: "#EFD297",
          light1: "#F1DDB6",
          light2: "#F0DDCB",
          light3: "#F7EBD3",
          light4: "#F9F1E2",
          light5: "#FCF8F0",
        },
        hanblue: {
          DEFAULT: "#031178",
          light1: "#0D20A7",
          light2: "#1C5CBC",
          light3: "#2C7BD3",
          light4: "#5F6CC3",
          light5: "#AFB5E1",
        },
        facebook: "#3d5a99",
        twitter: "#000000",
        linkedin: "#007bb6",
        pinterest: "#cb2027",
        whatsapp: "#25d366",
        telegram: "#0088cc",
        youtube: "#bb0000",
        instagram: "#e1306c",
      },
      fontSize: {
        xxs: ["10px", "14px"],
      },
      backgroundImage: {
        instagramgradient:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("./tailwind-plugin.cjs"),
  ],
}