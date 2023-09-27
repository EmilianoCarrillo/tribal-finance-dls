import { defineStyleConfig } from '@chakra-ui/react'

export const avatarTheme = defineStyleConfig({
    baseStyle: {
        size: 'xs',
        container: {
            bg: 'blackAlpha.50',
            color: 'gray.500',
        },
    },

    defaultProps: {
        size: 'xs',
    },

    sizes: {
        xs: {
            width: '24px',
            height: '24px',
            container: {
                borderRadius: 6,
            },
        },
        sm: {
            width: '32px',
            height: '32px',
            container: {
                borderRadius: 6,
            },
        },
        md: {
            width: '40px',
            height: '40px',
            container: {
                borderRadius: 8,
            },
        },
        lg: {
            width: '48px',
            height: '48px',
            container: {
                borderRadius: 8,
            },
        },
    },
})