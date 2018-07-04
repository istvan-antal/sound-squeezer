import { DropZoneAction, DropZoneActionType } from '../actions/dropZone';

export enum DropZoneUIState {
    Default = 'default',
    Hover = 'hover',
}

export interface DropZoneState {
    state: DropZoneUIState;
}

export const dropZone = (state: DropZoneState = { state: DropZoneUIState.Default }, action: DropZoneAction) => {
    switch (action.type) {
        case DropZoneActionType.DragOver:
        return ({
            ...state,
            state: DropZoneUIState.Hover,
        });
        case DropZoneActionType.DragLeave:
            return ({
                ...state,
                state: DropZoneUIState.Default,
            });
        default:
        return state;
    }
};