import StyledSelect from './Select.style'
import TSelectProps from './Select.types'

const Select = ({ options, value, setValue }: TSelectProps) => {
    return <StyledSelect>
        <select value={value} onChange={e => setValue(e.target.value)}>
            {
                options.map(option => <option key={option.id} value={option.name}>{option.name}</option>)
            }
        </select>
    </StyledSelect>
}

export default Select