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

export type TEmeraldAccount = {
    allFound: number
    leftFounds: number
}

type TState = {
    emeraldAccount: TEmeraldAccount
    campaigns: TCampaign[]
    towns: { id: string, name: string }[]
    tags: string[]
}

export default TState