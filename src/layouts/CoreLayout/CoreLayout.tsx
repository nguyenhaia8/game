import { Box, Flex, BoxProps, Button, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export const CoreLayout = (props: BoxProps) => {
  const { children } = props
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    console.log('render')
  }, [])
  return (
    <Flex flexDirection="column" flex={1} overflow="hidden" height="100vh">
      <Flex
        background="#171c26"
        width="100%"
        alignItems="center"
        boxShadow="0 1px 5px 1px rgb(0 0 0 / 40%)"
        height="70px"
        color="#fff"
        paddingX="20px"
        justifyContent="space-between"
        zIndex={100}
      >
        <Flex gap="20px" alignItems="center">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={58} height={50} />
          </Link>
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
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Flex>
      <Flex overflow="hidden" flex={1}>
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
        <Flex flex={1} flexDirection="column">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
