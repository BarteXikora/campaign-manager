import StyledCreateActions from './CreateActions.style'
import Button from '../../ui/button/Button'

import { useNavigate } from 'react-router-dom'

const CreateActions = ({ isFormValid }: { isFormValid: boolean }) => {
    const navigate = useNavigate()

    return <StyledCreateActions>
        <Button $variant='tertiary' onClick={() => navigate('/')}>Cancel</Button>
        <Button $variant='primary' type='submit' disabled={!isFormValid}>Create new campaign</Button>
    </StyledCreateActions>
}

export default CreateActions