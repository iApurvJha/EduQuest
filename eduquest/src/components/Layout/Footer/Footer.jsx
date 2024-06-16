import { Box, Heading, VStack,Stack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <div>
      <Box padding={"4"} minH={"10vh"} bg={"blackAlpha.900"}>
        <Stack direction={["column",'row']}>
            <VStack alignItems={['center']} width={"full"}>
            <Heading children="All Rights Reserved" color={"white"} />
            <Heading fontFamily={"body"} size={"sm"} children="@Aj" color={"yellow.400"} />

            </VStack>
        </Stack>

      </Box>
    </div>
  )
}

export default Footer
