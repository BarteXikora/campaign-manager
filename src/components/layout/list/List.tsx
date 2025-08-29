import StyledList from './List.style'
import Campaign from '../campaign/Campaign'

import { useSelector } from '../../../store/store'

const List = () => {
    const campaigns = useSelector(state => state.campaigns)

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