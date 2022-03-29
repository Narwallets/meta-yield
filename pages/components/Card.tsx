import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props: BoxProps) => (
  <Box
    maxWidth="1xl"
    mx="auto"
    p={{ base: '6', md: '8' }}
    rounded={{ sm: 'lg' }}
    shadow={{ md: 'base' }}
    {...props}
  />
)