import TitleBar from '../../layout/titleBar/TitleBar'
import Form from '../../layout/form/Form'
import CreateActions from '../../layout/createActions/CreateActions'

const CreateScreen = () => {
    return (
        <>
            <TitleBar>
                <h2>Create new campaign:</h2>
            </TitleBar>

            <form>
                <Form />
                <CreateActions />
            </form>
        </>
    )
}

export default CreateScreen