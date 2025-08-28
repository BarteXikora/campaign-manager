import StyledInput from './Input.style'
import TInput from './Input.types'

const Input = (props: TInput) => {
    return <StyledInput>
        <input {...props} />

        {
            props.$unit && <span className='unit'>{props.$unit}</span>
        }
    </StyledInput>
}

export default Input