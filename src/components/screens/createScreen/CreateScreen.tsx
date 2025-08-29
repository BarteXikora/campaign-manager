import CreateFormHeader from '../../layout/createFormHeader/CreateFormHeader'
import Form from '../../layout/form/Form'
import CreateActions from '../../layout/createActions/CreateActions'

const CreateScreen = () => {
    return (
        <>
            <CreateFormHeader />
            <form>
                <Form />
                <CreateActions />
            </form>
        </>
    )
}

export default CreateScreen