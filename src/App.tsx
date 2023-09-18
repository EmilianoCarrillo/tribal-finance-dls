import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/work-sans/600.css";

import * as React from "react"
import {
  Box, Card, Container, Stack, Text, Link, Flex, HStack, Badge, Image, VStack, Button, CardHeader, Heading, CardFooter, CardBody, Progress
} from "@chakra-ui/react"
import { NavigationBar } from "./components/NavigationBar"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import { TrancheCard } from "./components/Pool page/TrancheCard";
import { LoanPeriodCard } from "./components/Pool page/LoanPeriodCard";
import { PoolPageHeader } from "./components/Pool page/PoolPageHeader";

export const App = () => (
  <Box>
    <NavigationBar />
    <ColorModeSwitcher position='fixed' bottom='24px' right='32px' zIndex='999'/>
    <Container maxW='container.md'>
      <Stack gap='8'>
        <PoolPageHeader/>
        <Stack gap='4'>
          <LoanPeriodCard/>
          <TrancheCard/>
          <TrancheCard/>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
