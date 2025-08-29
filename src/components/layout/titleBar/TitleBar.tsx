import StyledTitleBar from './TitleBar.style'

const TitleBar = ({ children }: { children: React.ReactNode }) => {
    return <StyledTitleBar>
        {children}
    </StyledTitleBar>
}

export default TitleBar