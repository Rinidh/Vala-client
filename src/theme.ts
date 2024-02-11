import { extendTheme, theme as default_theme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const buttonDark = {
  border: "1px solid",
  borderColor: "valaBlue.300",
  bg: "valaBlue.200",
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
  bg: "valaBlue.700",
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
        // customVariant: (props: StyleFunctionProps) => ({
        //   color: mode('white', 'gray.800')(props),
        //   backgroundColor: mode('valaBlue.200', 'valaBlue.700')(props),

        //   _hover: {
        //     backgroundColor: mode('valaBlue.300', 'valaBlue.600')(props),
        //   },

        //   _active: {
        //     backgroundColor: mode('valaBlue.400', 'valaBlue.500')(props),
        //   },
        // }),

        outline: (props: StyleFunctionProps)=>( //modifying the outline variant
          mode(buttonLight, buttonDark)(props) //less repetition of mode()
          //the props is an obj with colorMode as one of its properties
          //mode is a function that does the allocation for you acc to color mode
        )
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