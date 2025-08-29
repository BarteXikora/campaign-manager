import TState from './state.types'

const initialState: TState = {
    emeraldAccount: { allFound: 10000, leftFounds: 0 },
    campaigns: [
        {
            id: '1',
            name: 'Test campaign',
            tags: ['tag1', 'tag2', 'tag3', 'tag4'],
            statusActive: true,
            bidAmount: 1.5,
            campaignFund: 1000,
            town: 'New York',
            radius: 20
        }, {
            id: '2',
            name: 'Example Campaign Name',
            tags: ['tag1', 'tag2'],
            statusActive: false,
            bidAmount: 0.5,
            campaignFund: 500,
            town: 'Cracow',
            radius: 5
        }
    ],
    towns: [{ id: '0', name: 'Kraków' }, { id: '1', name: 'Warszawa' }, { id: '2', name: 'Gdańsk' }],
    tags: ['Example', 'Tag', 'Names']
}

export default initialState