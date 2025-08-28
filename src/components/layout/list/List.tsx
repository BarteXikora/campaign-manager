import StyledList from './List.style'

import Campaign from '../campaign/Campaign'
import { TCampaign } from '../campaign/campaign.types'

const __campaigns: TCampaign[] = [
    {
        id: '1',
        name: 'Test campaign',
        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        statusActive: true,
        bidAmount: 1.5,
        campaignFund: 1000,
        town: 'New York',
        radius: 20
    }, {
        id: '2',
        name: 'Example Campaign Name',
        tags: ['tag1', 'tag2'],
        statusActive: false,
        bidAmount: 0.5,
        campaignFund: 500,
        town: 'Cracow',
        radius: 5
    }
]

const List = () => {
    return <StyledList>
        <ul>
            {
                __campaigns.map(campaign => <li key={campaign.id}>
                    <Campaign {...campaign} />
                </li>)
            }
        </ul>
    </StyledList>
}

export default List