import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    popup: boolean
    popupTarget: string,
    isLight: boolean,
    search: false | string;
}

// Define the initial state using that type
const initialState: CounterState = {
    popup: false,
    popupTarget: 'bitcoin',
    isLight: true,
    search: false
}
export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        togglePopup: (state, action) => {
            state.popup = action.payload
        },
        updatePopupTarget: (state, action) => {
            state.popupTarget = action.payload
        },
        toggleTheme: (state, action) => {
            state.isLight = action.payload
        },
        updateSearch: (state, action) => {
            state.search = action.payload
        }

    },
})

export const { togglePopup, updatePopupTarget, toggleTheme, updateSearch } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default counterSlice.reducer