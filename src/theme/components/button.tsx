import { defineStyleConfig } from '@chakra-ui/react'

export const buttonTheme = defineStyleConfig({
    defaultProps: {
        colorScheme: 'primary',
    },

    sizes: {
        lg: {
            fontSize: '16px',
            lineHeight: '22px',
        },
    },
})