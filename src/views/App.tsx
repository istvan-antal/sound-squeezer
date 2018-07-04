import * as React from 'react';
import './App.scss';
import DropBox from './DropBox';
import DropZone from './DropZone';
import { StateStructure } from '../reducers';
import { Actions } from '../actions';

const { ipcRenderer } = require('electron');

export default class App extends React.Component<StateStructure & Actions> {
    render() {
        return (
            <DropZone
                onDragEnter={this.props.dragEnter}
                onDropFile={file => { ipcRenderer.send('dropFile', file); }}
                onDragLeave={this.props.dragLeave}
            >
                <DropBox state={this.props.dropZone.state} />
            </DropZone>
        );
    }
}