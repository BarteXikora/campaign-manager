import EditHeader from '../../layout/editHeader/EditHeader'
import Form from '../../layout/form/Form'
import EditActions from '../../layout/editActions/EditActions'

import { FormEvent } from 'react'
import useValidation from '../../../hooks/useValidation/useValidation'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from '../../../store/store'
import { editCampaign } from '../../../store/appSlice'
import { useNavigate } from 'react-router-dom'

const EditScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const campaignID = useParams().id
    const campaign = useSelector(state => state.campaigns.filter(c => c.id === campaignID))
    const emeraldAccount = useSelector(state => state.emeraldAccount)

    const { form, setForm, isFormValid, validationMessage } = useValidation(emeraldAccount, campaign.length === 1 ? campaign[0] : undefined)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch(editCampaign(form))
        navigate('/')
    }

    return (
        <>
            <EditHeader name={campaign[0].name} />
            <form onSubmit={e => handleSubmit(e)}>
                <Form values={form} setValues={setForm} validationMessage={validationMessage} />
                <EditActions isFormValid={isFormValid} campaignID={campaignID || ''} />
            </form>
        </>
    )
}

export default EditScreen