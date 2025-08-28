import styled from 'styled-components'

const StyledInput = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-radius: ${({ theme }) => theme.borderRadiuses.small};
    transition: ${({ theme }) => theme.transition};
    cursor: text;
    align-items: center;

    input {
        font-size: ${({ theme }) => theme.fontSizes.small};
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        padding: ${({ theme }) => theme.spaces.medium} ${({ theme }) => theme.spaces.medium};

        &[type=number] {
            text-align: right;

            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }
    }

    .unit {
        padding-right: ${({ theme }) => theme.spaces.big};
        font-size: ${({ theme }) => theme.fontSizes.default};
        font-weight: bold;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray2};
    }

    &:focus-within {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`

export default StyledInput