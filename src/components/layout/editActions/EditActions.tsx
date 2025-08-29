import StyledEditActions from './EditActions.style'
import Button from '../../ui/button/Button'

const EditActions = () => {
    return <StyledEditActions>
        <div className="column">
            <hr />

            <Button $variant='secondary'>Remove campaign</Button>
        </div>

        <div className="column">
            <Button $variant='secondary'>Cancel</Button>
            <Button $variant='primary' type='submit'>Save changes</Button>
        </div>
    </StyledEditActions>
}

export default EditActions