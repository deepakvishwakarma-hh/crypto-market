import { Coin } from "../utils/types";
import Details from "../templates/Details"
import NotFound from "../templates/NotFound";
import { useAppSelector } from "../redux-store/hooks";
import { Container, Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";

const Board = () => {

    const color = useColorModeValue('black ', 'white')
    const data = useAppSelector(store => store.state.response);
    const search = useAppSelector(store => store.state.search)
    const searchedCoin = data?.filter((item: Coin) => item.id.includes(search.toString().toLowerCase() as string))
    const notFound = (searchedCoin?.length == 0) ? true : false
    const t = (search) ? searchedCoin : data
    const blockMapper = t?.map((item: any, index: number) => <Details key={index} data={item} />)

    return (
        <Box minH={'80vh'} color="black" >
            <Container maxW={"container.xl"}>
                <Flex color={color} p={2} borderRadius={2} >
                    <Text p={2} textTransform="capitalize" flex={.5}>rank</Text>
                    <Text p={2} textTransform="capitalize" flex={2}>name</Text>
                    <Text p={2} textTransform="capitalize" flex={1} display={['none', 'block']}>priceUsd</Text>
                    <Text p={2} textTransform="capitalize" flex={1} display={['none', 'block']} >changePercent24Hr</Text>
                </Flex >
            </Container>
            <Container maxW={"container.xl"}>
                <Flex flexDir="column">
                    {blockMapper}
                    {notFound && search && <NotFound />}
                </Flex>
            </Container>
        </Box >
    )
}
export default Board
