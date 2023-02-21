import { Box } from '@chakra-ui/react'
import Image from 'next/image'

type ItemGameProps = {
  name: string
  srcImg: string
}

export const ItemGame = (props: ItemGameProps) => {
  const { name, srcImg } = props
  return (
    <Box>
      <Image src={srcImg} alt="img" width={100} height={200} />
      <Box>{name}</Box>
    </Box>
  )
}
