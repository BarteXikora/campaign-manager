import StyledEditActions from './EditActions.style'
import Button from '../../ui/button/Button'

import { useNavigate } from 'react-router-dom'

const __id = 0

const EditActions = () => {
    const navigate = useNavigate()

    return <StyledEditActions>
        <div className="column">
            <hr />

            <Button $variant='remove' onClick={() => navigate(`/confirm-remove/${__id}`)}>Remove campaign</Button>
        </div>

        <div className="column">
            <Button $variant='secondary' onClick={() => navigate('/')}>Cancel</Button>
            <Button $variant='primary' type='submit'>Save changes</Button>
        </div>
    </StyledEditActions>
}

export default EditActions