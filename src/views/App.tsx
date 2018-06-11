import * as React from 'react';
import './App.scss';

const { ipcRenderer } = require('electron');

export default class App extends React.Component {
    render() {
        const classes = 'App';
        return (
            <div
                ref={node => {
                    if (!node) {
                        return;
                    }

                    node.addEventListener('drop', e => {
                        if (e.dataTransfer.files.length) {
                            // tslint:disable-next-line:prefer-for-of
                            for (let i = 0; i < e.dataTransfer.files.length; i += 1) {
                                const file = e.dataTransfer.files[i];
                                // tslint:disable-next-line:no-any
                                ipcRenderer.send('dropFile', (file as any).path);
                            }
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    node.addEventListener('dragover', e => {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }}
                className={classes}
            >
                Drop files to convert.
            </div>
        );
    }
}