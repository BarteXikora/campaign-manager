import TState from './state.types'
import { v4 as uuid } from 'uuid'

const initialState: TState = {
    emeraldAccount: { allFound: 5000, leftFounds: 0 },
    campaigns: [
        {
            id: uuid(),
            name: 'T-Shirts and Blouses',
            tags: ['T-Shirts', 'Blouses'],
            statusActive: true,
            bidAmount: 0.65,
            campaignFund: 2000,
            town: 'Kraków',
            radius: 20
        }, {
            id: uuid(),
            name: 'Warsaw Shoes',
            tags: ['Shoes'],
            statusActive: false,
            bidAmount: 0.5,
            campaignFund: 100,
            town: 'Warszawa',
            radius: 5
        }
    ],
    towns: [{ id: '0', name: 'Kraków' }, { id: '1', name: 'Warszawa' }, { id: '2', name: 'Gdańsk' }, { id: '3', name: 'Radom' }, { id: '4', name: 'Poznań' }],
    tags: ['Shoes', 'Pants', 'T-Shirts', 'Blouses', 'Dresses']
}

export default initialState