export type TCampaign = {
    id: string
    name: string
    tags: string[]
    statusActive: boolean
    bidAmount: number
    campaignFund: number
    town: string
    radius: number
}

type TState = {
    emeraldAccount: number
    campaigns: TCampaign[]
}

export default TState