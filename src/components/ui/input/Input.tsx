import StyledInput from './Input.style'
import TInput from './Input.types'

const Input = (props: TInput) => {
    const handleFocus = (target: EventTarget & HTMLInputElement) => {
        if (props.type === 'number') target.select()
    }

    return <StyledInput>
        <input {...props} onFocus={event => handleFocus(event.target)} />

        {
            props.$unit && <span className='unit'>{props.$unit}</span>
        }
    </StyledInput>
}

export default Input