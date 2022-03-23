import { Coin } from "../utils/types";
import { Flex, Text, useColorModeValue, type FlexProps, useColorMode } from "@chakra-ui/react";
import { useAppDispatch } from "../redux-store/hooks";
import { togglePopup, updatePopupTarget } from "../redux-store/reducers";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";


export const MotionWrap = motion<FlexProps>(Flex)


const Detail = ({ data }: { data: Coin }) => {

    const { colorMode } = useColorMode();

    const boxShadowBasesOnTheme = (colorMode !== 'light') ? '1px 6px 15px -1px rgba(148,145,148,.3)' : "none"

    const controls = useAnimation();

    const { ref, inView } = useInView();


    const wrapVarient = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    }


    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);




    const { rank, name, priceUsd, changePercent24Hr } = data;

    const dispatch = useAppDispatch()

    const ColorManager = (changePercent24Hr: string) => {

        const number = Math.floor(parseInt(changePercent24Hr))

        if (changePercent24Hr.includes("-")) {
            if (number == -1) {
                return "#FED7D7"
            }
            else if (number == -0) {
                return "#FEFCBF"
            }
            else if (number == -2) {
                return "#FEB2B2"
            }
            else if (number == -3) {
                return "#FC8181"
            }
            else if (number == -4) {
                return "#F56565"
            }
            else if (number <= -5) {
                return "#E53E3E"
            }

        } else {
            if (number == 0) {
                return "#F0FFF4"
            }
            else if (number == 1) {
                return "#C6F6D5"
            }
            else if (number == 2) {
                return "#9AE6B4"
            }
            else if (number == 3) {
                return "#68D391"
            }
            else if (number == 4) {
                return "#48BB78"
            }
            else if (number >= 5) {
                return "#38A169"
            }
        }
    }

    const color = useColorModeValue('#2D3748', "white")
    const text = useColorModeValue("#E2E8F0", '#2D3748')


    const gradient = `linear(to-r, ${color}, ${ColorManager(changePercent24Hr)})`

    return (
        <MotionWrap
            variants={wrapVarient}
            animate={controls}
            ref={ref}

            onClick={() => {
                dispatch(togglePopup(true));
                dispatch(updatePopupTarget(rank))
            }}
            color={text}
            boxShadow={boxShadowBasesOnTheme}
            bgGradient={gradient} my={2} p={2} borderRadius={2} >
            <Text p={2} flex={.5}>{rank}</Text>
            <Text p={2} flex={2} >{name}</Text>
            <Text color={'black'} p={2} flex={1}>${priceUsd}</Text>
            <Text display={['none', 'block']} color="black" p={2} flex={1} >${changePercent24Hr}</Text>
        </MotionWrap >
    )
}

export default Detail