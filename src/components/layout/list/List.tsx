import StyledList from './List.style'
import Campaign from '../campaign/Campaign'
import Empty from '../empty/Empty'

import { useSelector } from '../../../store/store'

const List = () => {
    const campaigns = useSelector(state => state.campaigns)

    if (campaigns.length === 0) return <Empty />

    return <StyledList>
        <ul>
            {
                campaigns.map(campaign => <li key={campaign.id}>
                    <Campaign {...campaign} />
                </li>)
            }
        </ul>
    </StyledList>
}

export default List