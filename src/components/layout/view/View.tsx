import { Outlet } from 'react-router-dom'

import Container from '../container/Container'
import Header from '../header/Header'

const View = () => {
    return <Container>
        <Header />

        <Outlet />
    </Container>
}

export default View