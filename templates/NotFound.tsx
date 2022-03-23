import { Center, Text, useColorModeValue } from "@chakra-ui/react"


const NotFound = () => {

    const color = useColorModeValue('white', 'black')


    return (
        <Center bg={'whiteAlpha.200'} color={color} h={300} flexDir="column" >

            <Text fontSize={50}>
                ?
            </Text>
            <Text>Plase re-cheak your input</Text>

        </Center >

    )
}

export default NotFound