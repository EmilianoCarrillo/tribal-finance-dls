import { defineStyleConfig } from '@chakra-ui/react'

export const badgeTheme = defineStyleConfig({
    baseStyle: {
        px: '6px',
        borderRadius: 'full',
        textTransform: 'none',
        height: 'fit-content',
    },

    defaultProps: {
        variant: 'solid',
        colorScheme: 'gray',
    },
})