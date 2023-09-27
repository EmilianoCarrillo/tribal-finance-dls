import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

  const baseStyle = definePartsStyle({
    root: {
      paddingTop: '24px',
      paddingBottom: '24px',
    },
    tab: {
      fontSize: 'md',
      fontWeight: 'medium',
      borderRadius: 'md',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
    },
  });
  
  const darkVariant = definePartsStyle({
    root: {
      backgroundColor: 'gray.900',
    },
    tab: {
      color: 'gray.50',
      _selected: {
        backgroundColor: 'gray.700',
      },
    },
  });
  
  const lightVariant = definePartsStyle({
    root: {
      backgroundColor: 'white',
    },
    tab: {
      fontSize: 'lg',
      _selected: {
        backgroundColor: 'gray.100',
      },
    },
  });
  
  const primaryVariant = definePartsStyle({
    root: {
      backgroundColor: 'transparent',
    },
    tab: {
      fontSize: 'lg',
      _selected: {
        backgroundColor: 'transparent',
        borderBottom: '2px solid',
        borderColor: 'primary.500',
        color: 'primary.500',
      },
    },
  });

  const variants = {
    dark: darkVariant,
    light: lightVariant,
    primary: primaryVariant,
  };
  
  export const tabsTheme = defineMultiStyleConfig({
    baseStyle,
    variants,
    defaultProps: { variant: "dark"}
  });