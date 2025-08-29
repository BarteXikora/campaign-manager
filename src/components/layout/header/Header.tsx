import StyledHeader from './Header.style'

import { useSelector, useDispatch } from '../../../store/store'
import { recalculateEmeraldAccount } from '../../../store/appSlice'
import { useState, useEffect } from 'react'

const Header = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state)

    const [allCampaigntCnt, setAllCampaignsCnt] = useState<number>(0)
    const [activeCampaigntCnt, setActiveCampaignsCnt] = useState<number>(0)

    useEffect(() => {
        setAllCampaignsCnt(state.campaigns.length)
        setActiveCampaignsCnt(state.campaigns.filter(c => c.statusActive).length)

    }, [state.campaigns])

    useEffect(() => {
        dispatch(recalculateEmeraldAccount())

    }, [state.campaigns, dispatch])

    return <StyledHeader>
        <div className="logo">CampaignManager</div>

        <div className="header-data">
            <div className="data-box">
                <span className='title'>All: </span>
                <span className='value'>{allCampaigntCnt}</span>
            </div>

            <div className="data-box">
                <span className='title'>Active: </span>
                <span className='value'>{activeCampaigntCnt}</span>
            </div>

            <div className="emerald-account">
                <span className='title'>Emerald Account: </span>
                <span className='value'>{state.emeraldAccount.leftFounds} $</span>
            </div>
        </div>
    </StyledHeader>
}

export default Header