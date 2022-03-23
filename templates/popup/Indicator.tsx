import { Tooltip, Box } from "@chakra-ui/react"

const Indicator = ({ percent }: any) => {

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


    return (
        <Tooltip label="risk indicator">
            <Box border="2px grey solid" borderRadius={10} h={50} w={50} mx={2} bg={ColorManager(percent)}></Box>
        </Tooltip>
    )
}

export default Indicator