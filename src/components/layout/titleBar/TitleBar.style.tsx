import styled from 'styled-components'

const StyledTitleBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spaces.medium};

    h2 {
        padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.xBig};
        font-size: ${({ theme }) => theme.fontSizes.title};
        font-size: bold;
        margin: 0;
    }

    .actions-box {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.medium};
        font-weight: bold;
        padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.xBig};

        span {
            display: flex;
            gap: 5px;
        }

        .on {
            color: ${({ theme }) => theme.colors.primary};
            width: 35px;
        }

        .off {
            color: ${({ theme }) => theme.colors.gray2};
            width: 35px;
        }
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: ${({ theme }) => theme.spaces.medium};

        h2, .actions-box {
            padding: 0;
        }

        .actions-box {
            flex-direction: column-reverse;
        }
    }
`

export default StyledTitleBar