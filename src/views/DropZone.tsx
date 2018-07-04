import * as React from 'react';

interface Props {
    onDropFile(file: string): void;
    onDragEnter(): void;
    onDragLeave(): void;
}

export default class DroZone extends React.Component<Props> {
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
                                this.props.onDropFile((file as any).path);
                            }
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    node.addEventListener('dragenter', e => {
                        this.props.onDragEnter();
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    node.addEventListener('dragleave', e => {
                        this.props.onDragLeave();
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }}
                className={classes}
            >
                {this.props.children}
            </div>
        );
    }
}