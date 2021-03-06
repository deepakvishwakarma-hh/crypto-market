import { Coin } from "../utils/types";
import { motion } from "framer-motion";
import { useState } from 'react'
import { useRouter } from "next/router";
import ColorManager from "../utils/_mini";
import { useAppDispatch } from "../redux-store/hooks";
import { togglePopup, updatePopupTarget } from "../redux-store/reducers";
import { Flex, Text, useColorModeValue, type FlexProps, useColorMode, Button } from "@chakra-ui/react";

export const MotionWrap = motion<FlexProps>(Flex)

const Detail = ({ data }: { data: Coin }) => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { colorMode } = useColorMode();
    const color = useColorModeValue("white", '#2D3748')
    const text = useColorModeValue('#2D3748', "#E2E8F0")
    const [isMoreDetailsTrue, setMoreDetails] = useState<boolean>(false)
    const onWrapperClick = () => { setMoreDetails(!isMoreDetailsTrue) }

    const boxShadowBasesOnTheme = (colorMode == 'light')
        ? '1px 6px 15px -1px rgba(148,145,148,.3)'
        : "none";

    const { rank, name, priceUsd, changePercent24Hr } = data;
    const gradient = `linear(to-r, ${color}, ${ColorManager(changePercent24Hr)})`

    const onClick = () => {
        if (innerWidth < 700) {
            router.push(`coins/${data.id}`)
        } else {
            dispatch(togglePopup(true));
            dispatch(updatePopupTarget(rank))
        }
    }


    const Mapper = ['supply', 'changePercent24Hr', 'priceUsd', 'volumeUsd24Hr', 'vwap24Hr'].map((value: any, index: number) => {
        return (
            <Flex flexWrap={'wrap'} px={3} py={1} key={index} justifyContent="space-between">
                <Text color={"tomato"} p={1} fontWeight={500} textTransform={'capitalize'}>{value} : </Text>
                <Text p={1} wordBreak={['break-all']}  >{data[value]}</Text>
            </Flex >
        )
    })

    return (
        <>
            <MotionWrap onClick={onWrapperClick}
                userSelect={'none'} color={text} boxShadow={boxShadowBasesOnTheme} bgGradient={gradient} my={2} p={2} borderRadius={2}>
                <Text p={2} flex={.5}>{rank}</Text>
                <Text p={2} flex={2} >{name}</Text>
                <Text display={['none', 'block']} color={'black'} p={2} flex={1}>${priceUsd}</Text>
                <Text display={['none', 'block']} color="black" p={2} flex={1} >${changePercent24Hr}</Text>
                <Button bg={color} onClick={onClick}>{">"}</Button>
            </MotionWrap >

            {isMoreDetailsTrue && <Flex borderRadius={2}
                bg={(colorMode == 'light') ? 'white' : 'black'}
                color={(colorMode !== 'light') ? 'white' : 'black'} flexDir={'column'} display={['flex', 'none']}>
                {Mapper}
            </Flex>}

        </>
    )
}

export default Detail