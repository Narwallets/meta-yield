import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

const Card = (props: BoxProps) => (
  <Box
    maxWidth="1xl"
    mx="auto"
    p={{ base: '3', md: '8' }}
    rounded={{ base: 'lg' }}
    border="2px"
    borderColor='gray.200'
    borderRadius={'16px'}
    shadow={{ base: 'base' }}
    {...props}
  />
)

export default Card;