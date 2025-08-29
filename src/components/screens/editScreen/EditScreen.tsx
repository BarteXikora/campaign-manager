import EditHeader from '../../layout/editHeader/EditHeader'
import Form from '../../layout/form/Form'
import EditActions from '../../layout/editActions/EditActions'

const EditScreen = () => {
    return (
        <>
            <EditHeader />
            <form>
                <Form />
                <EditActions />
            </form>
        </>
    )
}

export default EditScreen