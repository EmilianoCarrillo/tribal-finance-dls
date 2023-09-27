import { ChakraProvider} from '@chakra-ui/react';
import { FC } from 'react';
import { PropsWithChildren } from "react";
import theme from '../theme/index';

export const TribalFinanceDLSProvider: FC<PropsWithChildren> = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};