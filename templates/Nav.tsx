import { Flex, Center, Container, Tooltip } from "@chakra-ui/react"
import ThemeButton from "./ThemeButton"
import Search from "./Search"
const Nav = () => {

    return <Container maxW={"container.xl"} >
        <Flex h={100} >
            <Flex alignItems={'center'} flex={4} fontWeight={800} textTransform={'uppercase'} fontSize={25} letterSpacing={1}>Crypto Market</Flex>

            <Tooltip label="search ">
                <Center flex={1}>

                    <Search />
                </Center>
            </Tooltip>




            <Tooltip label="Theme">
                <Center flex={1}>
                    <ThemeButton />
                </Center>
            </Tooltip>
        </Flex>
    </Container>

}

export default Nav