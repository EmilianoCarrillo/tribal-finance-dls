import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import theme from '../theme/index';

interface TribalFinanceDLSProviderProps {
  useSystemColorMode?: boolean;
}

export const TribalFinanceDLSProvider: FC<PropsWithChildren<TribalFinanceDLSProviderProps>> = ({ children, useSystemColorMode = true }) => {
  const themeConfig: ThemeConfig = {
    ...theme.config,
    initialColorMode: useSystemColorMode ? 'system' : 'light',
    useSystemColorMode,
  };

  const themeWithConfig = extendTheme({
    ...theme,
    config: themeConfig,
  });

  return <ChakraProvider theme={themeWithConfig}>{children}</ChakraProvider>;
};