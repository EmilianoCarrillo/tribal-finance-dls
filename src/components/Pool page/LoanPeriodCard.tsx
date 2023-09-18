import * as React from "react"
import {
  Card, Stack, CardHeader, CardBody, Text, HStack, Progress, CardFooter, Button
} from "@chakra-ui/react"


export const LoanPeriodCard = () => (
    <Card 
    // bg='bg.elevation-raised' border='1px solid' borderColor='border.neutral-faded' boxShadow='sm' borderRadius='xl'
    >
        <CardHeader 
        // bgColor='red'
        >
            <Text textStyle='heading.small'>Loan period</Text>
        </CardHeader>
        <CardBody 
        // py='0px'
        >
            <HStack spacing='32px' wrap='wrap'>
            <Stack spacing='4px' minW='90px'>
                <Text textStyle='body.medium' color='fg.neutral-faded'>Loan duration</Text>
                <Text textStyle='heading.small' color='fg.neutral' fontWeight='600'>90 Days</Text>
            </Stack>
            <Stack spacing='4px' minW='90px'>
                <Text textStyle='body.medium' color='fg.neutral-faded'>Starting</Text>
                <Text textStyle='heading.small' color='fg.neutral' fontWeight='600'>Aug 3, 2023</Text>
            </Stack>
            <Stack spacing='4px' minW='90px'>
                <Text textStyle='body.medium' color='fg.neutral-faded'>Maturing</Text>
                <Text textStyle='heading.small' color='fg.neutral' fontWeight='600'>Nov 3, 2023</Text>
            </Stack>
            </HStack>
        </CardBody>
        <CardFooter>
            <Text textStyle='body.small' color='fg.neutral-faded'>This pool will only be funded if it reaches its targets by Tuesday, August 01 2023 11:59 PM CST.</Text>
        </CardFooter>
    </Card>
)
