import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

import * as actions from '../actions/parks.actions';

export interface ParksModel {
  id: string;
  reservation: string;
  acreage: string;
  notes: string;
}

export interface ParksState extends EntityState<ParksModel> {

}

export const adapter = createEntityAdapter<ParksModel>();

/** this will give you an initial empty state */
const initialState = adapter.getInitialState();
/** this is for fake data */
// const initialState: ParksState = {
//   ids: ['1', '2'],
//   entities: {
//     '1': { id: '1', name: 'Guido\'s Park', acreage: '15 Acres', notes: 'Not a good place to be after dark.' },
//     '2': { id: '2', name: 'Bardo Creek', acreage: '132 Acres', notes: 'Bring your raft!' }
//   }
// }

const reducerFunction = createReducer(
  initialState,
  on(
    actions.loadParksSucceeded,
    (state, { parks }) => (adapter.setAll(parks, state))
  )
);

export function reducer(state: ParksState = initialState, action: Action): ParksState {
  return reducerFunction(state, action);
}


const { selectAll, selectTotal } = adapter.getSelectors();

export const selectAllParkModelArray = selectAll;
export const selectTotalParks = selectTotal;
