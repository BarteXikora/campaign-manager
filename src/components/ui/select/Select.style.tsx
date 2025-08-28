import styled from 'styled-components'

const StyledSelect = styled.div`
    display: flex;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        top: 12px;
        right: 18px;
        width: 10px;
        height: 10px;
        transform: rotateZ(45deg);
        border-bottom: 2px solid ${({ theme }) => theme.colors.black};
        border-right: 2px solid ${({ theme }) => theme.colors.black};
        z-index: 100;
        transition: ${({ theme }) => theme.transition};
    }

    select {
        width: 100%;
        font-size: ${({ theme }) => theme.fontSizes.small};
        padding: ${({ theme }) => theme.spaces.medium} ${({ theme }) => theme.spaces.medium};
        border: none;
        background-color: ${({ theme }) => theme.colors.gray3};
        border-radius: ${({ theme }) => theme.borderRadiuses.small};
        outline: none;
        transition: ${({ theme }) => theme.transition};
        -webkit-appearance: none;
        z-index: 50;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.colors.gray2};
        }

        &:focus {
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    }
`

export default StyledSelect