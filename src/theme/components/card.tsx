import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    bgColor: 'bg.elevation-raised',
    borderColor: "border.neutral-faded",
    borderWidth: "1px",
    boxShadow:'sm',
    borderRadius: 'lg',
  },
  header: {
    paddingX: ['4','6'],
    paddingTop: ['4','6'],
    paddingBottom: '0',
  },
  body: {
    paddingX: ['4','6'],
  },
  footer: {
    paddingX: ['4','6'],
    paddingTop: '0',
    paddingBottom: ['4','6'],
  },
})


export const cardTheme = defineMultiStyleConfig({ baseStyle})