import { defineStyleConfig } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/react'

const $arrowBg = cssVar("popper-arrow-bg")

export const tooltipTheme = defineStyleConfig({
    baseStyle: {
        backgroundColor: 'gray.900',
        borderRadius: 'md',
        color: 'white',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        textAlign: 'center',
        [$arrowBg.variable]: 'colors.gray.900',
    }
})