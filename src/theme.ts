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
      50: "#dbdaf7",
      100: "#c0bef7",
      200: "#9f9cf0",
      300: "#807df0",
      400: "#6b64fa",
      500: "#5249fc",
      600: "#3d34ed",
      700: "#281fdb",
      800: "#0f07ad",
      900: "#090385"
    },
    valaRed: {
  
    },  
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
        )
      },
    },

    Input: {
      variants: {
        outline: {
          field: { //modifying the field section
            borderColor: "valaBlue.800",
            border: "2px solid",
            boxShadow: "0px 2px 2px black",
            bg: "valaBlue.50",
            _focus: { //when clicked
              borderColor: "valaBlue.400",
              boxShadow: "0px 2px 2px black",
            },
            _hover: {
              bg: "valaBlue.100",
              borderColor: "valaBlue.800"
            },
            // _focusVisible: { //unknown (activates on clicking??)
            //   // zIndex: 1,
            //   // borderColor: "yellow",
            //   // boxShadow: "0px 10px 10px red",
            // },

          },
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