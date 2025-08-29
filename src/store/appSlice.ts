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
        },

        setActive: (state, action: PayloadAction<{ id: string, setActive: boolean }>) => {
            return {
                ...state,
                campaigns: state.campaigns.map(c =>
                    c.id === action.payload.id ? { ...c, statusActive: action.payload.setActive } : c
                )
            }
        },

        recalculateEmeraldAccount: (state, action: PayloadAction) => {
            let sum = 0

            for (const campaign of state.campaigns) sum += campaign.campaignFund

            const leftFounds = state.emeraldAccount.allFound - sum

            return { ...state, emeraldAccount: { ...state.emeraldAccount, leftFounds } }
        }

    }
})

export default appSlice.reducer
export const { addCampaign, editCampaign, removeCampaign, setActive, recalculateEmeraldAccount } = appSlice.actions