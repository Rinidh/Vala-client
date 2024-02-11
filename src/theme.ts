import { extendTheme, theme as default_theme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

/*
With MenuList and MenuItem in this project, I have used 'react Context' and individual styling (in certain components) istead of styling them here, in extendTheme().
This is due to:
  - The MenuItem colors differ much in many areas eg in NavsMenu, I want it to match the colors of the header; at SearchPopOver, I want it to unique etc
  - It restricts limited colors to generally all MenuItems
  - It was better to replace Box with MenuItem in some places eg in SearchPopOver

For example, I have used headerStyleProps to add same color styles to all MenuItems in Header. This can work even if I had Boxes instead of MenuItems
*/

const buttonDark = {
  border: "1px solid",
  borderColor: "valaBlue.300",
  bg: "valaBlue.400",
  color: "valaBlue.800",
  _hover: {
    bg: "valaBlue.300"
  },
  _active: {
    bg: "valaBlue.200"
  },
}

const buttonLight = {
  border: "1px solid",
  borderColor: "valaBlue.900",
  bg: "valaBlue.600",
  color: "whiteAlpha.800",
  _hover: {
    bg: "valaBlue.900"
  },
  _active: {
    bg: "valaBlue.700"
  },
}

const theme = extendTheme({
  colors: {
    valaBlue: {
      50: "#edf5fc", //light
      100: "#d4eaff",
      200: "#58b5fc",
      300: "#2392fc",
      400: "#2003fc",
      500: "#1c04d4", //dark
      600: "#1d0aad",
      700: "#150785",
      800: "#0f0369",
      900: "#070136"
    }
  },

  fonts: {
    body: "Merriweather" // Also use "Whisper"
  },

  //NOT WORKING GLOBAL STYLES
  //set the font of whole project to "Merriweather" as default
  // global: (props: StyleFunctionProps) => ({
  //   body: {
  //     fontFamily: 'body',
  //     color: mode('gray.800', 'whiteAlpha.900')(props),
  //     bg: mode('yellow', 'red')(props),
  //     lineHeight: 'base',
  //   },
  // }),

  components: {
    Text: { //edit the baseStyle
      baseStyle: {
        fontFamily: `Merriweather, ${default_theme.fonts?.body}`,
      },
    },

    Button: {
      variants: {
        // custom new variant for use
        customVariant: (props: StyleFunctionProps) => ({
          fontSize: {base: 50, md: 30, lg: 15}, //or bigger: { base: "60px", md: "35px", lg: "20px" },
          color: "white",
          backgroundColor: mode("valaBlue.400", "valaBlue.600")(props),
          boxSizing: "border-box",
          h: "40px",
          minW: "100px",

          _hover: {
            backgroundColor: mode("valaBlue.500", "valaBlue.700")(props),
            // border: mode("","1px solid")(props), // boxSizing is not preventing button from enlarging due to added border
            // borderColor: "valaBlue.500"
          },

          _active: {
            backgroundColor: mode("valaBlue.500", "valaBlue.700")(props),
          },

          transition: "all 0.1s linear"
          // Prefer not to set padding and margin here
        }),

        // outline: (props: StyleFunctionProps)=>( //modifying the outline variant
        //   mode(buttonLight, buttonDark)(props) //less repetition of mode()
        //   //the props is an obj with colorMode as one of its properties
        //   //mode is a function that does the allocation for you acc to color mode
        // )
      },
    },

    Input: {
      variants: {
        outline: {
          field: {
            border: "5px solid",
            borderRadius: 20,
            fontSize: "20px",
            // more styles eg backgroundColor and others related to color mode are 
            // styled at the consumer comp. The mode() function is failing to work in this field object
          }
        }
      }
    }, 

    // CheckBox: { //doesn't work; rather use withDefaultColorScheme
    //   baseStyle: {
    //     control: {
    //       _checked: {
    //         bg: "yellow"
    //       },
    //       _disabled: {
    //         bg: 'red',
    //       },
    //       _focusVisible: {
    //         boxShadow: "outline",
    //       },
    //     }
    //   }
    // }

  }
},

withDefaultColorScheme({
  colorScheme: 'red', //can be valaRed
  components: ['Checkbox'],
}),

withDefaultVariant({
  variant: 'flushed', //unless you set the variant to customVariant (above), this variant is adopted defaultly
  components: ['Input'],
})
)

export default theme;