import StyledNotFound from '../notFound/NotFound.style'
import Button from '../../ui/button/Button'

import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return <StyledNotFound>
        <h1>The list is empty.</h1>

        <Button $variant='primary' onClick={() => navigate('/create')}>Create new capaign</Button>
    </StyledNotFound>
}

export default NotFound