import * as React from "react"
import {
  VStack, Badge, Image, Link, Text, HStack
} from "@chakra-ui/react"
import { ExternalLink } from "lucide-react"


export const PoolPageHeader = () => (
    <VStack gap='12px' alignItems='start'>
        <Badge size='auto' colorScheme='primary' w='auto'>Open</Badge>
        <HStack>
        <Image boxSize='1.5rem' borderRadius='0.375em' src='https://media.licdn.com/dms/image/C4E0BAQGzH3jwML6rUA/company-logo_200_200/0/1637777050323/tribal_credit_logo?e=2147483647&v=beta&t=Z6BCblrvxN5gPhC-F-0U7_7rAZAmofThcVGGH_FsjJw'/>
        <Text color='fg.neutral' textStyle='body.large'>Tribal Credit</Text>
        </HStack>
        <Text textStyle='heading.large'>Working capital for LATAM SMEs</Text>
        <Link color='fg.primary' isExternal>
        <HStack>
            <Text>View data room </Text>
            <ExternalLink size='16'/>
        </HStack>
        </Link>
    </VStack>
)
