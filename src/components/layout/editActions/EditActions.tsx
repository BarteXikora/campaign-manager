import StyledEditActions from './EditActions.style'
import Button from '../../ui/button/Button'

import { useNavigate } from 'react-router-dom'

const EditActions = ({ isFormValid, campaignID }: { isFormValid: boolean, campaignID: string }) => {
    const navigate = useNavigate()

    return <StyledEditActions>
        <div className="column">
            <hr />

            <Button $variant='remove' onClick={() => navigate(`/confirm-remove/${campaignID}`)}>Remove campaign</Button>
        </div>

        <div className="column">
            <Button $variant='secondary' onClick={() => navigate('/')}>Cancel</Button>
            <Button $variant='primary' type='submit' disabled={!isFormValid}>Save changes</Button>
        </div>
    </StyledEditActions>
}

export default EditActions