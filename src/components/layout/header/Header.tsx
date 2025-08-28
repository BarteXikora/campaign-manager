import StyledHeader from './Header.style'

const Header = () => {
    return <StyledHeader>
        <div className="logo">CampaignManager</div>

        <div className="header-data">
            <div className="data-box">
                <span className='title'>All: </span>
                <span className='value'>3</span>
            </div>

            <div className="data-box">
                <span className='title'>Active: </span>
                <span className='value'>2</span>
            </div>

            <div className="emerald-account">
                <span className='title'>Emerald Account: </span>
                <span className='value'>1000 $</span>
            </div>
        </div>
    </StyledHeader>
}

export default Header