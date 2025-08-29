import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {}
})

export default appSlice.reducer
export const { } = appSlice.actions