import Details from "../templates/Details"
import { Container, Flex, Text, Box, useColorModeValue } from "@chakra-ui/react"
import { useAppSelector } from "../redux-store/hooks";
import { Coin } from "../utils/types";
import NotFound from "../templates/NotFound";
type prop = {
    data: any
}

const Board = ({ data }: prop) => {

    const search = useAppSelector(store => store.state.search)

    const color = useColorModeValue('white', 'black ')

    const searchedCoin = data?.filter((item: Coin) => item.id.includes(search as string))

    const notFound = (searchedCoin?.length == 0) ? true : false

    const t = (search) ? searchedCoin : data

    const blockMapper = t?.map((item: any, index: number) => <Details key={index} data={item} />)

    return (
        <Box minH={'80vh'} color="black" >

            <Container maxW={"container.xl"}>

                <Flex color={color} p={2} borderRadius={2} >
                    <Text p={2} textTransform="capitalize" flex={.5} >rank</Text>
                    <Text p={2} textTransform="capitalize" flex={2}  >name</Text>
                    <Text p={2} textTransform="capitalize" flex={1} >priceUsd</Text>
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

// bgGradient='linear(to-l, #7928CA, #FF0080)'