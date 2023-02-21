import { Box, Button } from '@chakra-ui/react'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box padding="25px">
      <Button>Click me</Button>
      <Box>This is Home Page man</Box>
    </Box>
  )
}

export default Home
