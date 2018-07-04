import { AnyAction } from './default';

export enum DropZoneActionType {
    DragOver = 'dragOver',
    DragLeave = 'dragLeave',
}

interface DragOverAction {
    type: DropZoneActionType.DragOver;
}

interface DragLeaveAction {
    type: DropZoneActionType.DragLeave;
}

export const dragEnter = (): DragOverAction => ({
    type: DropZoneActionType.DragOver,
});

export const dragLeave = (): DragLeaveAction => ({
    type: DropZoneActionType.DragLeave,
});

export type DropZoneAction = DragOverAction | DragLeaveAction | AnyAction;