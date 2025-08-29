import TitleBar from '../titleBar/TitleBar'
import Toggler from '../../ui/toggler/Toggler'

import { useDispatch } from '../../../store/store'
import { setActive } from '../../../store/appSlice'
import { TCampaign } from '../../../store/state.types'

const EditHeader = ({ campaign }: { campaign: TCampaign }) => {
    const dispatch = useDispatch()

    const handleSetActive = (isChecked: boolean) => {
        if (campaign) dispatch(setActive({ id: campaign.id, setActive: isChecked }))
    }

    return <TitleBar>
        <h2>Edit campaign: <i>{campaign.name}</i></h2>

        <div className='actions-box'>
            <span>
                Status:

                {
                    campaign.statusActive ?
                        <div className="on">On</div>
                        :
                        <div className="off">Off</div>
                }
            </span>

            <Toggler checked={campaign.statusActive} onChange={event => handleSetActive(event.target.checked)} />
        </div>
    </TitleBar>
}

export default EditHeader