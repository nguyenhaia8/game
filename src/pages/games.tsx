import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { TopGame } from 'components'

const Games: NextPage = () => {
  return (
    <Box padding="25px" overflow="scroll">
      <Box>Games</Box>

      <TopGame />
      <TopGame />
      <TopGame />
      <TopGame />
      <TopGame />
      <TopGame />
      <TopGame />
      <TopGame />
    </Box>
  )
}

export default Games
