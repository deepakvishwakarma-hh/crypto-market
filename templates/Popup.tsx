
import { useAppSelector } from "../redux-store/hooks"
import { Container, Box, Button, Text, filter, Heading, Flex, type ContainerProps, useColorMode, useColorModeValue } from "@chakra-ui/react"
import type { Coin } from "../utils/types"
import Tabular from "./popup/Table"
import Head from "./popup/Head"
import { motion } from "framer-motion"
import { useRef } from "react"


export const MotionWrap = motion<ContainerProps>(Container)

const Popup = ({ data }: any) => {


    const _bg = useColorModeValue('#171923', 'whitesmoke')


    const wrapper = useRef(null)
    console.log(wrapper)

    const target = useAppSelector(store => store.state.popupTarget);
    const filteredArr: Coin = data[parseInt(target) - 1];

    const Animation = {
        initial: { height: 0 },
        animate: { height: 600, transition: { duration: .5 } },
        exit: { height: 0 }
    }

    return (
        <Box ref={wrapper} pos="fixed" bottom={0} height="fit-content" bg={'transparent'} width="100%">

            <MotionWrap bg={_bg} initial={Animation.initial} animate={Animation.animate} exit={Animation.exit} p={5} h={"100%"} maxW={"container.xl"} borderRadius="1rem 1rem 0  0">

                <Head Arr={filteredArr} />
                <Tabular Arr={filteredArr} />

            </MotionWrap>
        </Box >
    )
}

export default Popup