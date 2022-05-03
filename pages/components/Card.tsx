import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

const Card = (props: BoxProps) => (
  <Box
    maxWidth="1xl"
    mx="auto"
    p={{ base: '6', md: '8' }}
    rounded={{ sm: 'lg' }}
    shadow={{ md: 'base' }}
    {...props}
  />
)

export default Card;