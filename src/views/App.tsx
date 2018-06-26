import * as React from 'react';
import './App.scss';
import DropBox from './DropBox';
import DropZone from './DropZone';

const { ipcRenderer } = require('electron');

export default class App extends React.Component {
    render() {
        return (
            <DropZone view={DropBox} onDropFile={file => { ipcRenderer.send('dropFile', file); }} />
        );
    }
}