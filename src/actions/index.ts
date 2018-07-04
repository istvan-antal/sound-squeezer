import { Dispatch } from 'redux';
import { dragEnter, dragLeave } from './dropZone';

const actions = {
    dragEnter,
    dragLeave,
};

export type Actions = typeof actions;

export const mapDispatchToProps = (dispatch: Dispatch) => Object.keys(actions).map(key => {
    // tslint:disable-next-line:no-any
    const actionCreator = (actions as any)[key];
    // tslint:disable-next-line:no-any
    return [key, (...args: any[]): any => dispatch(actionCreator.call(undefined, ...args))] as any;
// tslint:disable-next-line:no-any
}).reduce((previous: any, current: any) => ({
        ...previous,
        [current[0]]: current[1],
}), {}) as typeof actions;