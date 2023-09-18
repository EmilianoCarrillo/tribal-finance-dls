import { defineStyleConfig } from '@chakra-ui/react'

export const containerTheme = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    paddingX: ['4','8'],
    paddingTop: ['14','24'],
    paddingBottom: ['8','17'],
    maxW: 'container.lg'
  },
})