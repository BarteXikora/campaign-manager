import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spaces.medium};
    margin-bottom: ${({ theme }) => theme.spaces.big};
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadiuses.big};

    .logo {
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSizes.title};
        padding: ${({ theme }) => theme.spaces.big + ' ' + theme.spaces.xBig};
    }

    .data-box {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.small};
        margin-right: ${({ theme }) => theme.spaces.medium};
    }

    .title {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    .value {
        font-size: ${({ theme }) => theme.fontSizes.default};
        font-weight: bold;
    }

    .header-data {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.medium};
    }

    .emerald-account {
        background-color: ${({ theme }) => theme.colors.gray1};
        height: 100%;
        display: flex;
        align-items: end;
        flex-direction: column;
        justify-content: center;
        padding: 0 ${({ theme }) => theme.spaces.xBig};
        border-radius: 0 ${({ theme }) => theme.borderRadiuses.big} ${({ theme }) => theme.borderRadiuses.big} 0;
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        position: sticky;
        top: 0;
        margin-top: 0;
        margin-bottom: ${({ theme }) => theme.spaces.medium};
        border-radius: 0;

        .logo {
            padding: ${({ theme }) => theme.spaces.big}  ${({ theme }) => theme.spaces.medium};
        }

        .data-box {
            display: none;
        }

        .emerald-account {
            border-radius: 0;
            padding: 0 ${({ theme }) => theme.spaces.medium};
        }
    }
`

export default StyledHeader