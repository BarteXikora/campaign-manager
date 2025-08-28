import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;

  .container {
    width: ${({ theme }) => theme.screenBreakpoints.desktop};
  }

  @media (max-width: ${({ theme }) => theme.screenBreakpoints.desktop}) {
    .container {
      width: ${({ theme }) => theme.screenBreakpoints.tablet};
    }
  }

  @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
    .container {
      width: 100%;
    }
  }
`

export default StyledContainer