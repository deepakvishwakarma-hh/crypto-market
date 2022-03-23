import axios from 'axios';
import { useEffect } from 'react';
import Nav from '../templates/Nav';
import Board from '../templates/Board';
import Popup from '../templates/Popup';
import type { Coin } from '../utils/types';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { updateResponse } from '../redux-store/reducers';
import { useAppSelector, useAppDispatch } from '../redux-store/hooks';

type prop = {
  Res: Coin[]
}

const Home = ({ Res }: prop) => {
  const dispatch = useAppDispatch()
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('gray.800', 'white');
  const popup = useAppSelector(store => store.state.popup);

  useEffect(() => {
    if (Res) {
      dispatch(updateResponse(Res));
    }
  }, [])

  return (
    <Box bg={bg} color={color}>
      < Nav _s />
      <Board />
      {popup && <Popup />}
    </Box >
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