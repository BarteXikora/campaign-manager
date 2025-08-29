import StyledCreateActions from './CreateActions.style'
import Button from '../../ui/button/Button'

const CreateActions = () => {
    return <StyledCreateActions>
        <Button $variant='tertiary'>Cancel</Button>
        <Button $variant='primary' type='submit'>Create new campaign</Button>
    </StyledCreateActions>
}

export default CreateActions