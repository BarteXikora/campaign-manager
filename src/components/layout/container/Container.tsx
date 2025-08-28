import StyledContainer from './Container.style'

const Container = ({ children }: { children: React.ReactNode }) => {
    return <StyledContainer>
        <div className="container">
            {children}
        </div>
    </StyledContainer>
}

export default Container