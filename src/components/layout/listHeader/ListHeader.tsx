import StyledListHeader from './ListHeader.style'
import Button from '../../ui/button/Button'

const ListHeader = () => {
    return <StyledListHeader>
        <h2>All campaigns:</h2>

        <Button $variant='primary'>Create new campaign</Button>
    </StyledListHeader>
}

export default ListHeader