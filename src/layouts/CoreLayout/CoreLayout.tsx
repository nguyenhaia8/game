import { Box, Flex, BoxProps, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect } from 'react'

export const CoreLayout = (props: BoxProps) => {
  const { children } = props

  useEffect(() => {
    console.log('render')
  }, [])
  return (
    <>
      <Flex
        background="#171c26"
        width="100%"
        alignItems="center"
        boxShadow="0 1px 5px 1px rgb(0 0 0 / 40%)"
        height="70px"
        color="#fff"
        paddingX="20px"
        justifyContent="space-between"
      >
        <Flex gap="20px">
          <Box>Logo</Box>
          <Flex gap="15px">
            <Link href="/games">Games</Link>
            <Link href="/spaces">Spaces</Link>
            <Link href="/marketplace">Marketplace</Link>
          </Flex>
        </Flex>

        <Flex gap="15px" alignItems="center">
          <Button
            borderRadius="40px"
            height="30px"
            width="100px"
            fontSize="12px"
          >
            LOG IN
          </Button>
          <Button
            borderRadius="40px"
            height="30px"
            width="100px"
            fontSize="12px"
          >
            SIGN UP
          </Button>
        </Flex>
      </Flex>
      <Flex minH="100vh">
        <Flex
          flexDirection="column"
          background="#0e121b"
          color="#fff"
          width="60px"
          align="center"
          gap="10px"
        >
          <Box>item</Box>
          <Box>item</Box>
          <Box>item</Box>
          <Box>item</Box>
        </Flex>
        <Box flex={1}>{children}</Box>
      </Flex>
    </>
  )
}
