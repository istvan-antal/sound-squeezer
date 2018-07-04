import { combineReducers } from 'redux';
import { dropZone, DropZoneState } from './dropZone';

export interface StateStructure {
    dropZone: DropZoneState;
}

/*
declare module 'redux' {
    export interface Middleware {
        (api: MiddlewareAPI<StateStructure>): (next: Dispatch<StateStructure>) => Dispatch<StateStructure>;
    }
}*/

export const reducers = combineReducers<StateStructure>({
    dropZone,
});