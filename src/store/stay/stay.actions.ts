// import { ISearchBy } from '../../interfaces/search'
// import { IFilterBy } from '../../interfaces/filter'
import { StayAction } from './stay.reducer'
import { query } from '../../services/stay.service'
import { store } from '../store'

export async function loadStays() {
    store.dispatch<StayAction>({ type: 'SET_IS_LOADING', isLoading: true })
    try {
        const stays = (await query()) ||[]
        store.dispatch<StayAction>({ type: 'SET_STAYS', stays })
    } catch (err) {
        console.log('StayActions: Had issues loading stays', err)
        throw err
    } finally {
        store.dispatch<StayAction>({ type: 'SET_IS_LOADING', isLoading: false })
    }
}

// export async function loadMoreStays(pageIdx: number, searchBy?: ISearchBy, filterBy?: IFilterBy) {
//     store.dispatch<StayAction>({ type: 'SET_IS_LOADING', isLoading: true })
//     try {
//         const stays = (await stayService.query(searchBy, filterBy, pageIdx)) || []
//         store.dispatch<StayAction>({ type: 'LOAD_MORE_STAYS', stays })
//     } catch (err) {
//         console.log('StayActions: Had issues loading stays', err)
//         throw err
//     } finally {
//         store.dispatch<StayAction>({ type: 'SET_IS_LOADING', isLoading: false })
//     }
// }
