import styled from 'styled-components'

const StyledCampaign = styled.li`
    background-color: ${({ theme }) => theme.colors.gray4};
    padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.big};
    border-radius: ${({ theme }) => theme.borderRadiuses.big};
    display: grid;
    align-items: center;
    grid-template-columns: 25% repeat(4, minmax(auto, 2fr)) 1fr;
    gap: ${({ theme }) => theme.spaces.big};
    margin-bottom: ${({ theme }) => theme.spaces.small};

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.title};
        font-style: italic;
        margin: 0;
    }

    .tags {
        display: flex;
        gap: ${({ theme }) => theme.spaces.small};
        flex-wrap: wrap;
    }

    .tag {
        font-size: ${({ theme }) => theme.fontSizes.small};
        background-color: ${({ theme }) => theme.colors.gray3};
        padding: 0 ${({ theme }) => theme.spaces.small};
        border-radius: ${({ theme }) => theme.borderRadiuses.small};
    }

    .data-box{
        display: flex;
        flex-direction: column;
        align-items: end;
        text-align: right;

        .title {
            font-size: ${({ theme }) => theme.fontSizes.small};
            color: ${({ theme }) => theme.colors.black};
        }

        .value {
            font-size: ${({ theme }) => theme.fontSizes.default};
            font-weight: bold;
            white-space: nowrap;

            &.active {
                color: ${({ theme }) => theme.colors.primary};
            }
            &.inactive {
                color: ${({ theme }) => theme.colors.gray1};
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.desktop}) {
        grid-template-columns: repeat(4, 1fr);

        & > :nth-child(1) { grid-area: 1 / 1; grid-column: span 2; } 
        & > :nth-child(6) { grid-area: 1 / 2; grid-column: span 2; } 
        & > :nth-child(2) { grid-area: 2 / 1; }
        & > :nth-child(3) { grid-area: 2 / 2; }
        & > :nth-child(4) { grid-area: 2 / 3; }
        & > :nth-child(5) { grid-area: 2 / 4; }

        .data-box {
            align-items: start;
            text-align: left;
        }

        .action-box {
            justify-self: end;
        }
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: ${({ theme }) => theme.spaces.small};
        margin: 0 ${({ theme }) => theme.spaces.small};
        margin-bottom: ${({ theme }) => theme.spaces.small};
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme }) => theme.spaces.small};

        .name-tags {
            margin-bottom: ${({ theme }) => theme.spaces.medium};
        }

        & > :nth-child(1) { grid-area: 1 / 1; } 
        & > :nth-child(6) { grid-area: 1 / 2; } 
        & > :nth-child(2) { grid-area: 2 / 1; }
        & > :nth-child(3) { grid-area: 2 / 2; }
        & > :nth-child(4) { grid-area: 3 / 1; }
        & > :nth-child(5) { grid-area: 3 / 2; }
    }   
`

export default StyledCampaign