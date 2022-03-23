import axios from 'axios'
import Nav from '../../templates/Nav'
import { Coin } from '../../utils/types'
import Header from '../../templates/popup/Head'
import Head from 'next/head'
import { Box, Text, Flex, Container, useColorModeValue } from '@chakra-ui/react'


const Id = ({ data }: { data: any }) => {

    const Response = data[0] as Coin;

    const keys = Object.keys(Response);


    const bg = useColorModeValue('white', 'black');
    const color = useColorModeValue('gray.800', 'white');


    const Mapper = keys.map((value: any, index: number) => {
        return (
            <Flex flexWrap={'wrap'} px={3} py={3} key={index} justifyContent="space-between">
                <Text fontWeight={800} textTransform={'capitalize'}>{value} : </Text>
                <Text wordBreak={['break-all']} color={color} >{Response[value]}</Text>
            </Flex>
        )
    })




    return (
        <>
            <Head>
                <title>{Response.id}</title>
                <meta name="description" content={`${Response.name} informations`} />
                <meta name={`og:${Response.name} informations`} property={`og:${Response.name} informations`} content={`${Response.name} informations`} />
                <meta name="twitter:card" content={`${Response.name} informations`} />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Box width={'100%'} h={'100vh'} bg={bg} color={color} >
                <Nav />
                <Container maxWidth={'container.xl'}>
                    <Header Arr={Response} />
                    {Mapper}
                </Container>
            </Box></>
    )
}


export async function getServerSideProps(context: any) {

    const id = context.query.id
    const data = await axios.get('https://api.coincap.io/v2/assets');
    const fllters = data?.data?.data?.filter((item: any) => item.id == id as string)

    return {
        props: {
            data: fllters,
        },
    }
}

export default Id