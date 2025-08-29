import EditHeader from '../../layout/editHeader/EditHeader'
import Form from '../../layout/form/Form'
import EditActions from '../../layout/editActions/EditActions'

import { useState, useEffect, useCallback, FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from '../../../store/store'
import { editCampaign } from '../../../store/appSlice'
import { useNavigate } from 'react-router-dom'
import { TCampaign } from '../../../store/state.types'

const EditScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const campaignID = useParams().id
    const campaign = useSelector(state => state.campaigns.filter(c => c.id === campaignID))
    const emeraldAccount = useSelector(state => state.emeraldAccount)

    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const [validationMessage, setValidationMessage] = useState<string>('')
    const [form, setForm] = useState<TCampaign>({ id: '', name: '', statusActive: true, bidAmount: 0, campaignFund: 0, town: 'Kraków', radius: 0, tags: [] })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch(editCampaign(form))
        navigate('/')
    }

    useEffect(() => {
        if (campaign.length === 1) setForm({ ...campaign[0] })
        else alert('not found')

    }, [])

    const validateForm = useCallback((): boolean => {
        let isOk = true
        let message: string | null = null

        if (form.name.length < 3 || form.name.length > 50) {
            message = 'Please set the campaign name.'
            isOk = false
        }

        if (form.tags.length === 0) {
            if (message == null) message = 'Please add at least one keyword.'
            isOk = false
        }

        if (form.bidAmount === 0 || form.bidAmount > form.campaignFund) {
            if (message === null) {
                if (form.bidAmount === 0) message = 'Please set bid amount greater than 0.'
                else message = 'Bid amount cannot be greater than campaign founds.'
            }

            isOk = false
        }

        if (form.campaignFund === 0 || form.campaignFund > emeraldAccount) {
            if (message === null) {
                if (form.campaignFund === 0) message = 'Please set campaign founds greater than 0.'
                else message = 'Insufficient funds in the emerald account.'
            }

            isOk = false
        }

        setValidationMessage(message || '')

        return isOk

    }, [form, emeraldAccount])

    useEffect(() => {
        setIsFormValid(validateForm())

    }, [form, validateForm])


    return (
        <>
            <EditHeader />
            <form onSubmit={e => handleSubmit(e)}>
                <Form values={form} setValues={setForm} validationMessage={validationMessage} />
                <EditActions isFormValid={isFormValid} campaignID={campaignID || ''} />
            </form>
        </>
    )
}

export default EditScreen