import axios from 'axios'
import Nav from '../templates/Nav'
import type { NextPage } from 'next'
import Board from '../templates/Board'
import { useAppSelector } from '../redux-store/hooks'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Popup from '../templates/Popup'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = ({ API, more }: any) => {

  const router = useRouter();
  const popup = useAppSelector(store => store.state.popup)

  const bg = useColorModeValue('black', 'white')
  const color = useColorModeValue('white', 'gray.800')

  const search = useAppSelector(state => state.state.search)

  useEffect(() => {
    document.body.style.background = "black"
  }, [])

  return (

    <Box overflow={'scroll'} bg={bg} color={color}>
      < Nav />
      <Board data={API} />
      {popup && <Popup data={API} />}
    </Box >
  )
}

export default Home



// ServerSide Rendering
export async function getServerSideProps() {
  const data = await axios.get('https://api.coincap.io/v2/assets');
  return {
    props: {
      API: data.data.data,
    },
  }
}