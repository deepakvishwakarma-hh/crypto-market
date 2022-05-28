import Search from "./Search"
import ThemeButton from "./ThemeButton"
import { Flex, Center, Container, Tooltip } from "@chakra-ui/react"

const Nav = ({ _s }: any) => {

    return <nav>
        <Container maxW={"container.xl"} >
            <Flex h={100} >
                <Flex alignItems={'center'} flex={4} fontWeight={800} fontSize={25} letterSpacing={1}>CryptoInf</Flex>

                {_s && <Tooltip label="search ">
                    <Center display={['none', ' flex ']} flex={3}>
                        <Search />
                    </Center>
                </Tooltip>}

                <Tooltip label="Theme">
                    <Center flex={1}>
                        <ThemeButton />
                    </Center>
                </Tooltip>
            </Flex>
            {_s && <Center justifyContent={'flex-end'} flex={3} display={['flex', ' none ']}>
                <Search />
            </Center>}
        </Container>
    </nav>

}

export default Nav