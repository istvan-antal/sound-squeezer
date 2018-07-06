import * as React from 'react';
import './App.scss';
import DropBox from './DropBox';
import DropZone from './DropZone';
import HBox from './HBox';
import { StateStructure } from '../reducers';
import { Actions } from '../actions';
import VBox from './VBox';

const { ipcRenderer } = require('electron');

export default class App extends React.Component<StateStructure & Actions> {
    render() {
        return (
            <VBox>
                <HBox>
                    <DropZone
                        className="HBox"
                        onDragEnter={this.props.dragEnter}
                        onDropFile={file => { ipcRenderer.send('dropFile', file); }}
                        onDragLeave={this.props.dragLeave}
                    >
                        <DropBox state={this.props.dropZone.state} />
                    </DropZone>
                </HBox>
            </VBox>
        );
    }
}