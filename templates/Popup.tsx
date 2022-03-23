
import Head from "./popup/Head"
import Tabular from "./popup/Table"
import { motion } from "framer-motion"
import { useAppSelector } from "../redux-store/hooks"
import { Container, Box, type ContainerProps, useColorModeValue } from "@chakra-ui/react"

export const MotionWrap = motion<ContainerProps>(Container)

const Popup = () => {

    const _bg = useColorModeValue('whitesmoke', '#171923')
    const data: any = useAppSelector(store => store.state.response);
    const target = useAppSelector(store => store.state.popupTarget);
    const filteredArr = data[parseInt(target) - 1];

    const Animation = {
        initial: { height: 0 },
        animate: { height: 500, transition: { duration: .5 } },
        exit: { height: 0 }
    }

    return (
        <Box pos="fixed" bottom={0} bg={'transparent'} width="100%" >

            <MotionWrap bg={_bg}
                initial={Animation.initial} animate={Animation.animate} exit={Animation.exit}
                p={5} maxW={"container.xl"} borderRadius="1rem 1rem 0  0">

                <Head C Arr={filteredArr} />
                <Tabular Arr={filteredArr} />

            </MotionWrap>
        </Box >
    )
}

export default Popup