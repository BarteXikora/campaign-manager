import styled from 'styled-components'

const StyledEditActions = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin-top: ${({ theme }) => theme.spaces.medium};

    .column {
        display: flex;
        gap: ${({ theme }) => theme.spaces.medium};

        &:nth-of-type(2) {
            justify-content: end;
        }

        hr {
            display: none;
        }
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        grid-template-columns: 1fr;
        padding: 0 ${({ theme }) => theme.spaces.medium};
        margin: ${({ theme }) => theme.spaces.xBig} 0;

        button {
            flex: auto;
        }

        & > :nth-child(1) { 
            grid-area: 2 / 1; 
            margin-top: ${({ theme }) => theme.spaces.xBig};
            flex-direction: column;

            hr {
                display: block;
                width: 60px;
                height: 0;
                border: none;
                border-top: 2px solid ${({ theme }) => theme.colors.gray2};
                margin: ${({ theme }) => theme.spaces.big} auto;
            }
        }
    }
`

export default StyledEditActions