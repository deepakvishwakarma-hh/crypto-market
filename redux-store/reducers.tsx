import { createSlice } from '@reduxjs/toolkit'
import type { Coin } from "../utils/types";

interface CounterState {
    popup: boolean
    popupTarget: string,
    isLight: boolean,
    search: false | string;
    response: undefined | Coin[],
}

const initialState: CounterState = {
    popup: false,
    popupTarget: 'bitcoin',
    isLight: true,
    search: false,
    response: undefined,
}
export const counterSlice = createSlice({
    name: 'counter',
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
        },
        updateResponse: (state, action) => {
            state.response = action.payload
        }
    },
})

export const { togglePopup, updateResponse, updatePopupTarget, toggleTheme, updateSearch } = counterSlice.actions

export default counterSlice.reducer