type TCampaignProps = {
    name: string
    tags: string[]
    statusActive: boolean
    bidAmount: number
    campaignFund: number
    town: string
    radius: number
}

export type TCampaign = TCampaignProps & { id: string }

export default TCampaignProps