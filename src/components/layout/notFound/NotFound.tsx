import StyledNotFound from './NotFound.style'
import Button from '../../ui/button/Button'

import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return <StyledNotFound>
        <h1>Campaign does not exist.</h1>

        <Button $variant='secondary' onClick={() => navigate('/')}>Go back to the list</Button>

    </StyledNotFound>
}

export default NotFound