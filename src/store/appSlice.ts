import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import initialState from './initialState'
import { TCampaign } from './state.types'

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {

        addCampaign: (state, action: PayloadAction<TCampaign>) => {
            return { ...state, campaigns: [{ ...action.payload, id: uuid() }, ...state.campaigns] }
        }

    }
})

export default appSlice.reducer
export const { addCampaign } = appSlice.actions