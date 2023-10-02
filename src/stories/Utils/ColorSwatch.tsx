import React from 'react';
import { Flex, useToken, Text, Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';


interface ColorSwatchProps {
  colorName: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ colorName }) => {
    const hexValue = useToken(
        'colors',
        [colorName],
      )

  return (
      <ChakraProvider theme={theme} resetCSS>
        <Flex gap='16px' alignItems='center' minW='400px'>
            <Box bg={colorName}  h='16px' w='16px' borderRadius='md' border='1px solid' borderColor='blackAlpha.300'/>
            <Box>
                <Text color='fg.neutral' fontSize='sm' fontWeight='600' my='0px'>{colorName}</Text>
                <Text color='fg.neutral-faded' fontSize='sm' my='0px'>{hexValue}</Text>
            </Box>
        </Flex>
      </ChakraProvider>
  );
};

export default ColorSwatch;