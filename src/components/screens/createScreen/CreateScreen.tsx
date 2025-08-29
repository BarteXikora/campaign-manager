import TitleBar from '../../layout/titleBar/TitleBar'
import Form from '../../layout/form/Form'
import CreateActions from '../../layout/createActions/CreateActions'

import { useState } from 'react'
import { TCampaign } from '../../../store/state.types'

const CreateScreen = () => {
    const [form, setForm] = useState<TCampaign>({ id: '', name: '', statusActive: true, bidAmount: 0, campaignFund: 0, town: '', radius: 0, tags: [] })

    return (
        <>
            <TitleBar>
                <h2>Create new campaign:</h2>
            </TitleBar>

            <form>
                <Form values={form} setValues={setForm} />
                <CreateActions />
            </form>
        </>
    )
}

export default CreateScreen