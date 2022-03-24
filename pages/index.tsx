import axios from 'axios';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Nav from '../templates/Nav';
import Board from '../templates/Board';
import Popup from '../templates/Popup';
import type { Coin } from '../utils/types';
import { Box, useColorModeValue, Button, Flex, Text } from '@chakra-ui/react';
import { updateResponse } from '../redux-store/reducers';
import { useAppSelector, useAppDispatch } from '../redux-store/hooks';

import { useRouter } from 'next/router'

type prop = {
  Res: Coin[]
}

const Home = ({ Res }: prop) => {

  const dispatch = useAppDispatch()
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('gray.800', 'white');
  const popup = useAppSelector(store => store.state.popup);
  const [isAutomaticRefeshOn, setAutomaticRefresh] = useState<boolean>(false)
  const onRefreshButtonClick = () => { setAutomaticRefresh(!isAutomaticRefeshOn) }


  useEffect(() => {

    if (Res) {
      dispatch(updateResponse(Res));
    }

    const Automation = setInterval(async () => {

      if (isAutomaticRefeshOn) {
        const data = await axios.get('https://api.coincap.io/v2/assets')
        dispatch(updateResponse(data.data.data));
      }

    }, 1000);

    return () => { clearInterval(Automation) }

  })


  return (
    <>
      <Head>
        <title>Cryptoinf</title>
        <meta name="description" content={"Cryptoinf is Crypto Market Analyer"} />
        <meta name={`og:Cryptoinf`} property={`og:Cryptoinf`} content="Cryptoinf is Crypto Market Analyer" />
        <meta name="twitter:card" content={`Cryptoinf`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box bg={bg} color={color}>

        <Flex flexDir={'column'} p={2}>
          <Button onClick={onRefreshButtonClick}>{(!isAutomaticRefeshOn ? 'Enable' : 'Diseble')} Auto Refresh</Button>
          <Text display={['block', 'none']} p={2}>Please use Desktop mode to get better experiance</Text>
        </Flex>

        < Nav _s />
        <Board />
        {popup && <Popup />}
      </Box >
    </>
  )
}

export default Home

// ServerSide Rendering
export async function getServerSideProps() {
  const data = await axios.get('https://api.coincap.io/v2/assets');
  return {
    props: {
      Res: data.data.data,
    },
  }
}