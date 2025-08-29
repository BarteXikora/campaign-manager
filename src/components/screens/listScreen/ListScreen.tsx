import TitleBar from '../../layout/titleBar/TitleBar'
import Button from '../../ui/button/Button'
import List from '../../layout/list/List'

const ListScreen = () => {
    return (
        <>
            <TitleBar>
                <h2>All campaigns:</h2>

                <Button $variant='primary'>Create new campaign</Button>
            </TitleBar>

            <List />
        </>
    )
}

export default ListScreen