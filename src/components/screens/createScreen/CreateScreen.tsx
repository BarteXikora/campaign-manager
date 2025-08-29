import TitleBar from '../../layout/titleBar/TitleBar'
import Form from '../../layout/form/Form'
import CreateActions from '../../layout/createActions/CreateActions'

import { useSelector, useDispatch } from '../../../store/store'
import useValidation from '../../../hooks/useValidation/useValidation'
import { addCampaign } from '../../../store/appSlice'
import { useNavigate } from 'react-router-dom'
import { FormEvent } from 'react'

const CreateScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const emeraldAccount = useSelector(state => state.emeraldAccount)

    const { form, setForm, isFormValid, validationMessage } = useValidation(emeraldAccount.leftFounds)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch(addCampaign(form))
        navigate('/')
    }

    return (
        <>
            <TitleBar>
                <h2>Create new campaign:</h2>
            </TitleBar>

            <form onSubmit={e => handleSubmit(e)}>
                <Form values={form} setValues={setForm} validationMessage={validationMessage} />
                <CreateActions isFormValid={isFormValid} />
            </form>
        </>
    )
}

export default CreateScreen