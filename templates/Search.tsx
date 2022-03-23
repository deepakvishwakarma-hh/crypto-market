import { Flex, Input, Box } from "@chakra-ui/react"
import { useAppDispatch } from "../redux-store/hooks"
import { updateSearch } from "../redux-store/reducers"

const Search = () => {

    const dispatch = useAppDispatch()

    const onChangeHandler = (e: any) => {
        dispatch(updateSearch(e.target.value as string))
    }

    return (
        <Flex borderRadius={10} pr={5} border={'grey solid 2px'} alignItems={'center'}>
            <Input onChange={onChangeHandler} placeholder="ex. bitcoin" _focus={{ border: 'none' }} border={'none'} />
            <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="20ś" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </Box>
        </Flex>
    )
}

export default Search