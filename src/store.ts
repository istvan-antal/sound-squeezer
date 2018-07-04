import { createStore, Store } from 'redux';
import { reducers, StateStructure } from './reducers';

// tslint:disable-next-line:no-any
const store: Store<StateStructure> = createStore(reducers);

export const getStore = () => store;