import TitleBar from '../../layout/titleBar/TitleBar'
import Form from '../../layout/form/Form'
import CreateActions from '../../layout/createActions/CreateActions'

import { useSelector } from '../../../store/store'
import { useState, useEffect, useCallback } from 'react'
import { TCampaign } from '../../../store/state.types'

const CreateScreen = () => {
    const emeraldAccount = useSelector(state => state.emeraldAccount)

    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const [validationMessage, setValidationMessage] = useState<string>('')
    const [form, setForm] = useState<TCampaign>({ id: '', name: '', statusActive: true, bidAmount: 0, campaignFund: 0, town: 'Kraków', radius: 0, tags: [] })

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
            <TitleBar>
                <h2>Create new campaign:</h2>
            </TitleBar>

            <form>
                <Form values={form} setValues={setForm} validationMessage={validationMessage} />
                <CreateActions isFormValid={isFormValid} />
            </form>
        </>
    )
}

export default CreateScreen