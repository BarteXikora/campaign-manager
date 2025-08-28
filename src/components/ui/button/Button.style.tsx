import styled, { css } from 'styled-components'
import TButton from './button.types'

const disabledStyles = css`
    background-color: ${({ theme }) => theme.colors.gray3}; 
    color: ${({ theme }) => theme.colors.gray2};

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray3};
        color: ${({ theme }) => theme.colors.gray2};
        cursor: not-allowed;
    }
`

const primaryStyles = css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryLighter};
    }
`

const secondaryStyles = css`
    background-color: ${({ theme }) => theme.colors.gray3};

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray2};
    }
`

const tertiaryStyles = css`
    background-color: ${({ theme }) => theme.colors.gray2};

     &:hover {
        background-color: ${({ theme }) => theme.colors.gray3};
    }
`

const StyledButton = styled.button<TButton>`
    display: flex;
    padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.medium};
    border-radius: ${({ theme }) => theme.borderradiuses.small};
    border: none;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    ${({ $variant }) => $variant === 'primary' && primaryStyles}
    ${({ $variant }) => $variant === 'secondary' && secondaryStyles}
    ${({ $variant }) => $variant === 'tertiary' && tertiaryStyles}

    ${({ disabled }) => disabled && disabledStyles}
`

export default StyledButton