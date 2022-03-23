

import { Flex, Text, AspectRatio } from '@chakra-ui/react'
import { useEffect } from 'react'

import type { Coin } from '../../utils/types'

type prop = {
    Arr: Coin
}

const Tabular = ({ Arr }: prop) => {


    const keys = Object.keys(Arr)
    const Mapper = keys.map((value: any, index: number) => {
        return (
            <Flex border={['1px grey solid', 'none']} flexWrap={'wrap'} px={3} py={1} key={index} justifyContent="space-between">
                <Text fontWeight={500} textTransform={'capitalize'}>{value} : </Text>
                <Text wordBreak={['break-all']} color={'grey'} >{Arr[value]}</Text>
            </Flex>
        )
    })

    return (
        <Flex flexDir={'column'}>
            {Mapper}
        </Flex>
    )
}

export default Tabular
