import StyledConfirmRemove from './ConfirmRemove.style'
import Button from '../../ui/button/Button'

const ConfirmRemove = () => {
    return <StyledConfirmRemove>
        <h1>Are you certain you want to remove the campaign: <i>Example Campaign Name</i>?</h1>

        <p>This action is irreversible.</p>

        <div className="actions">
            <Button $variant='secondary'>Cancel</Button>

            <Button $variant='remove'>Remove campaign</Button>
        </div>
    </StyledConfirmRemove>
}

export default ConfirmRemove