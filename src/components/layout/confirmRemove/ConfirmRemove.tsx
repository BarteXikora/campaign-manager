import StyledConfirmRemove from './ConfirmRemove.style'
import Button from '../../ui/button/Button'

import { useNavigate } from 'react-router-dom'

const __id = 0

const ConfirmRemove = () => {
    const navigate = useNavigate()

    return <StyledConfirmRemove>
        <h1>Are you certain you want to remove the campaign: <i>Example Campaign Name</i>?</h1>

        <p>This action is irreversible.</p>

        <div className="actions">
            <Button $variant='secondary' onClick={() => navigate(`/edit/${__id}`)}>Cancel</Button>

            <Button $variant='remove'>Remove campaign</Button>
        </div>
    </StyledConfirmRemove>
}

export default ConfirmRemove