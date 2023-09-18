import * as React from "react"
import {
  Flex, Card, Stack, CardHeader, CardBody, Text, HStack, Progress, CardFooter, Button
} from "@chakra-ui/react"


export const TrancheCard = () => (
    <Card>
        <CardHeader>
        <Stack spacing='0.5'> 
            <Text textStyle='heading.small'>Mezzanine</Text>
            <Text color='fg.neutral-faded' textStyle='subtitle'>Subordinated to senior debt.</Text>
        </Stack>
        </CardHeader>
        <CardBody>
        <HStack spacing='32px' wrap='wrap'>
            <Stack spacing='4px' minW='90px'>
            <Text textStyle='body.medium' color='fg.neutral-faded'>Remaining capacity</Text>
            <Flex gap='6px'>
                <Text textStyle='heading.small' color='fg.neutral'>300,000</Text>
                <Text textStyle='heading.small' color='fg.neutral-faded' fontWeight='400'>USDC</Text>
            </Flex>
            </Stack>
            <Stack spacing='4px' minW='90px'>
            <Text textStyle='body.medium' color='fg.neutral-faded'>APR</Text>
            <Text textStyle='heading.small' color='fg.neutral' fontWeight='600'>13%</Text>
            </Stack>
        </HStack>
        <Progress value={80} mt='24px' colorScheme='gray' h='6px' borderRadius='2px'/>
        </CardBody>
        <CardFooter>
        <Button variant='solid' colorScheme='primary'>Deposit</Button>
        </CardFooter>
    </Card>
)
