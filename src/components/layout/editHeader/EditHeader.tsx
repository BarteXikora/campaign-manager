import TitleBar from '../titleBar/TitleBar'
import Toggler from '../../ui/toggler/Toggler'

import { useState } from 'react'

const EditHeader = () => {
    const [isCapaignOn, setIsCampaignOn] = useState<boolean>(true)

    return <TitleBar>
        <h2>Edit campaign: <i>Example Capaign Name</i></h2>

        <div className='actions-box'>
            <span>
                Status:

                {
                    isCapaignOn ?
                        <div className="on">On</div>
                        :
                        <div className="off">Off</div>
                }
            </span>

            <Toggler checked={isCapaignOn} onChange={event => setIsCampaignOn(event.target.checked)} />
        </div>
    </TitleBar>
}

export default EditHeader