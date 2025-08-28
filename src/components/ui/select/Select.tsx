import StyledSelect from './Select.style'

type TOption = React.ReactElement<HTMLOptionElement>

type TSelectChildren = TOption | TOption[]

const Select = ({ children }: { children: TSelectChildren }) => {
    return <StyledSelect>
        <select>
            {children}
        </select>
    </StyledSelect>
}

export default Select