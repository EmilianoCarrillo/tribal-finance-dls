import * as React from "react"
import {
  Box, Flex, Spacer, Tab, TabList, Tabs, Image, DarkMode
} from "@chakra-ui/react"


export const NavigationBar = () => (
    <DarkMode>
        <Box position='fixed' top='0px' w='100%' bg='bg.page' borderBottom='1px solid' borderColor='border.neutral-faded' zIndex='2'>
            
            <Flex py='12px'px='32px'>
                <Image src='/Logo.svg' mr='32px'/>
                <Tabs variant='soft-rounded' colorScheme='gray'> 
                    <TabList>
                        <Tab borderRadius='4px'>Portfolio</Tab>
                        <Tab borderRadius='4px'>Lend</Tab>
                    </TabList>
                </Tabs>
                <Spacer />
            </Flex>
        </Box>
    </DarkMode>
)
