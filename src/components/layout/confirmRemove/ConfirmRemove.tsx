import StyledConfirmRemove from './ConfirmRemove.style'
import Button from '../../ui/button/Button'

import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from '../../../store/store'
import { removeCampaign } from '../../../store/appSlice'

const ConfirmRemove = () => {
    const dispatch = useDispatch()

    const campaignID = useParams().id
    const campaign = useSelector(state => state.campaigns.filter(c => c.id === campaignID))

    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(removeCampaign(campaignID || ''))
        navigate('/')
    }

    return <StyledConfirmRemove>
        <h1>Are you certain you want to remove the campaign: <i>{campaign.length > 0 ? campaign[0].name : ''}</i>?</h1>

        <p>This action is irreversible.</p>

        <div className="actions">
            <Button $variant='secondary' onClick={() => navigate(`/edit/${campaignID}`)}>Cancel</Button>

            <Button $variant='remove' onClick={handleClick}>Remove campaign</Button>
        </div>
    </StyledConfirmRemove>
}

export default ConfirmRemove