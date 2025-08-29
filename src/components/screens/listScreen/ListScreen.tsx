import TitleBar from '../../layout/titleBar/TitleBar'
import Button from '../../ui/button/Button'
import List from '../../layout/list/List'

import { useNavigate } from 'react-router-dom'

const ListScreen = () => {
    const navigate = useNavigate()

    return (
        <>
            <TitleBar>
                <h2>All campaigns:</h2>

                <Button $variant='primary' onClick={() => navigate('/create')}>Create new campaign</Button>
            </TitleBar>

            <List />
        </>
    )
}

export default ListScreen