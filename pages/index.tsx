type prop = { Res: Coin[] }
import axios from 'axios';
import Head from 'next/head'
import Nav from '../templates/Nav';
import Board from '../templates/Board';
import Popup from '../templates/Popup';
import type { Coin } from '../utils/types';
import { useEffect, useState } from 'react';
import { updateResponse } from '../redux-store/reducers';
import { useAppSelector, useAppDispatch } from '../redux-store/hooks';
import { Box, useColorModeValue, Button, Flex, Text } from '@chakra-ui/react';

const Home = ({ Res }: prop) => {
  const dispatch = useAppDispatch()
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('gray.800', 'white');
  const popup = useAppSelector(store => store.state.popup);
  const [isAutomaticRefeshOn, setAutomaticRefresh] = useState<boolean>(false)
  const onRefreshButtonClick = () => { setAutomaticRefresh(!isAutomaticRefeshOn) }

  useEffect(() => {
    Res && dispatch(updateResponse(Res));
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

        <Flex p={2} alignItems="center">

          <Button fontWeight={500} size={'sm'} onClick={onRefreshButtonClick}>{(!isAutomaticRefeshOn ? 'Enable' : 'Diseble')} Live Analytics</Button>
          <Text justifySelf={'flex-end'} color="gray" fontSize={12} p={2}>Enable to use live analytics</Text>
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