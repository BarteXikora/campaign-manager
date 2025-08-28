import styled from 'styled-components'

const StyledInput = styled.input`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => theme.spaces.medium} ${({ theme }) => theme.spaces.medium};
    border: none;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-radius: ${({ theme }) => theme.borderRadiuses.small};
    outline: none;
    transition: ${({ theme }) => theme.transition};

    &[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray2};
    }

    &:focus {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`

export default StyledInput