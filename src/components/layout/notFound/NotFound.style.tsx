import styled from 'styled-components'

const StyledNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray4};
    padding: ${({ theme }) => theme.spaces.xBig};
    border-radius: ${({ theme }) => theme.borderRadiuses.big};
    text-align: center;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.title};
        margin: ${({ theme }) => theme.spaces.medium} 0;
    }
`

export default StyledNotFound