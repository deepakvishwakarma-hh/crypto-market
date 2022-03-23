import { Box, Button, Text, Heading, Flex, Tooltip } from "@chakra-ui/react"
import { useAppDispatch } from "../../redux-store/hooks"
import { togglePopup } from "../../redux-store/reducers"
import type { Coin } from "../../utils/types"
import { useRouter } from 'next/router'
import Indicator from "./Indicator"

type prop = {
    Arr: Coin
}

const Head = ({ Arr }: prop) => {
    const router = useRouter()

    const dispatch = useAppDispatch()

    const onCancelHandler = () => {
        dispatch(togglePopup(false))
    }

    const onExploreHandler = () => {
        router.push(Arr.explorer)
    }

    const { name, symbol } = Arr

    return (
        <Flex alignItems={'center'}>
            <Heading display={"flex"} flex={1}>
                <Indicator percent={Arr.changePercent24Hr} />

                {name}
                <Text px={5} fontSize={15} display={'inline'}>{symbol}</Text>
            </Heading>
            <Flex alignItems={"center"} justifyContent={'flex-end'} flex={1} >
                <Tooltip label="explore">
                    <Box p={3} bg={'none'} onClick={onExploreHandler} my={5}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" />
                            <path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                    </Box>
                </Tooltip>
                <Tooltip label="close popup">
                    <Box p={3} bg={'none'} onClick={onCancelHandler} my={5}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>

                    </Box>
                </Tooltip>

            </Flex>
        </Flex>
    )
}

export default Head