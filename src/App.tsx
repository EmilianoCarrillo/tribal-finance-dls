import * as React from "react"
import {
  Box, Card, Container, Stack, Text, Link, Flex, HStack, Badge, Image, VStack, Button, CardHeader, Heading, CardFooter, CardBody, Progress
} from "@chakra-ui/react"
import { ExternalLink } from "lucide-react"
import { NavigationBar } from "./components/NavigationBar"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"

export const App = () => (
  <Box>
    <NavigationBar />
    <ColorModeSwitcher position='fixed' bottom='24px' right='32px' zIndex='999'/>
    <Container maxW='654px' mt='120px' mb='64px'>
      <Stack gap='32px'>
        <VStack gap='12px' alignItems='start'>
          <Badge size='auto' colorScheme='primary' w='auto'>Open</Badge>
          <HStack>
          <Image boxSize='1.5rem' borderRadius='0.375em' src='https://media.licdn.com/dms/image/C4E0BAQGzH3jwML6rUA/company-logo_200_200/0/1637777050323/tribal_credit_logo?e=2147483647&v=beta&t=Z6BCblrvxN5gPhC-F-0U7_7rAZAmofThcVGGH_FsjJw'/>
            <Text color='fg.neutral'>Tribal Credit</Text>
          </HStack>
          <Heading fontSize='2xl' fontWeight='600'>Working capital for LATAM SMEs</Heading>
          <Link color='fg.primary' isExternal>
            <HStack>
              <Text>View data room </Text>
              <ExternalLink size='16'/>
            </HStack>
          </Link>
        </VStack>
        <Stack gap='16px'>
          <Card bg='bg.elevation-raised' border='1px solid' borderColor='border.neutral-faded' boxShadow='0px 1px 2px 0px rgba(16, 24, 40, 0.05)'>
            <CardHeader>
              <Heading fontSize='18px' fontWeight='600'>Loan period</Heading>
            </CardHeader>
            <CardBody py='0px'>
              <HStack spacing='32px' wrap='wrap'>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>Loan duration</Text>
                  <Text fontSize='18px' color='fg.neutral' fontWeight='600'>90 Days</Text>
                </Stack>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>Starting</Text>
                  <Text fontSize='18px' color='fg.neutral' fontWeight='600'>Aug 3, 2023</Text>
                </Stack>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>Maturing</Text>
                  <Text fontSize='18px' color='fg.neutral' fontWeight='600'>Nov 3, 2023</Text>
                </Stack>
              </HStack>
            </CardBody>
            <CardFooter>
              <Text fontSize='10px' color='fg.neutral-faded'>This pool will only be funded if it reaches its targets by Tuesday, August 01 2023 11:59 PM CST.</Text>
            </CardFooter>
          </Card>
          <Card bg='bg.elevation-raised' border='1px solid' borderColor='border.neutral-faded' boxShadow='0px 1px 2px 0px rgba(16, 24, 40, 0.05)' >
            <CardHeader>
              <Stack spacing='8px'> 
                <Heading fontSize='18px' fontWeight='600'>Mezzanine</Heading>
                <Text color='fg.neutral-faded' size='12px'>Subordinated to senior debt.</Text>
              </Stack>
            </CardHeader>
            <CardBody py='0px'>
              <HStack spacing='32px' wrap='wrap'>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>Remaining capacity</Text>
                  <Flex gap='6px'>
                    <Text fontSize='18px' color='fg.neutral' fontWeight='600'>300,000</Text>
                    <Text fontSize='18px' color='fg.neutral-faded' fontWeight='400'>USDC</Text>
                  </Flex>
                </Stack>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>APR</Text>
                  <Text fontSize='18px' color='fg.neutral' fontWeight='600'>13%</Text>
                </Stack>
              </HStack>
              <Progress value={80} mt='24px' colorScheme='gray' h='6px' borderRadius='2px'/>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='primary'>Deposit</Button>
            </CardFooter>
          </Card>
          <Card bg='bg.elevation-raised' border='1px solid' borderColor='border.neutral-faded' boxShadow='0px 1px 2px 0px rgba(16, 24, 40, 0.05)'>
            <CardHeader>
              <Stack spacing='8px'>
                <Heading fontSize='18px' fontWeight='600'>Senior</Heading>
                <Text color='fg.neutral-faded' size='12px'>First priority for repayment.</Text>
              </Stack>
            </CardHeader>
            <CardBody py='0px'>
              <HStack spacing='32px' wrap='wrap'>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>Remaining capacity</Text>
                  <Flex gap='6px'>
                    <Text fontSize='18px' color='fg.neutral' fontWeight='600'>4,000,000</Text>
                    <Text fontSize='18px' color='fg.neutral-faded' fontWeight='400'>USDC</Text>
                  </Flex>
                </Stack>
                <Stack spacing='4px' minW='90px'>
                  <Text fontSize='14px' color='fg.neutral-faded'>APR</Text>
                  <Text fontSize='18px' color='fg.neutral' fontWeight='600'>8.5%</Text>
                </Stack>
              </HStack>
              <Progress value={20} mt='24px' colorScheme='gray' h='6px' borderRadius='2px'/>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='primary'>Deposit</Button>
            </CardFooter>
          </Card>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
