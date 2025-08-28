import StyledCampaign from './Campaign.style'
import Button from '../../ui/button/Button'
import TCampaignProps from './campaign.types'

const Campaign = ({ name, tags, statusActive, bidAmount, campaignFund, town, radius }: TCampaignProps) => {
    return <StyledCampaign>
        <div className="name-tags">
            <h3>{name}</h3>
            <div className="tags">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
        </div>

        <div className="data-box">
            <span className='title'>Active:</span>
            <span className={`value ${statusActive ? 'active' : 'inactive'}`}>
                {statusActive ? 'On' : 'Off'}
            </span>
        </div>

        <div className="data-box">
            <span className='title'>Town & Radius:</span>
            <span className='value'>{town} +{radius}km</span>
        </div>

        <div className="data-box">
            <span className='title'>Bid amount:</span>
            <span className='value'>{bidAmount} $</span>
        </div>

        <div className="data-box">
            <span className='title'>Campaign fund:</span>
            <span className='value'>{campaignFund} $</span>
        </div>

        <div className="data-box action-box">
            <Button $variant='secondary'>Edit</Button>
        </div>
    </StyledCampaign>
}

export default Campaign