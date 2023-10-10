import React from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { Info } from 'lucide-react';

interface TooltipIconProps {
    label: string;
}

export const TooltipIcon: React.FC<TooltipIconProps> = ({label}) => {
    const size = 18;
    return (
        <Tooltip label={label} bg='blue' aria-label='A tooltip' maxW='xs'>
            <Box color={'fg.neutral-faded'} _hover={{color: 'fg.neutral'}} w={size} h={size}>
                <Info size={size} />
            </Box>
        </Tooltip>
    );
};