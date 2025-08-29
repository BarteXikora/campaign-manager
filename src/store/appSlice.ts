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
        },

        editCampaign: (state, action: PayloadAction<TCampaign>) => {
            const id = action.payload.id
            return {
                ...state,
                campaigns: state.campaigns.map(c =>
                    c.id === id ? action.payload : c
                )
            }
        },

        removeCampaign: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                campaigns: state.campaigns.filter(c =>
                    c.id !== action.payload
                )
            }
        }

    }
})

export default appSlice.reducer
export const { addCampaign, editCampaign, removeCampaign } = appSlice.actions