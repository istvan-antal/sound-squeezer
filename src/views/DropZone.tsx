import * as React from 'react';

type ElementFunction = () => JSX.Element;

interface Props {
    view: { new(): React.Component } | ElementFunction;
    onDropFile(file: string): void;
}

export default class DroZone extends React.Component<Props> {
    render() {
        const classes = 'App';
        const View = this.props.view;
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

                    node.addEventListener('dragover', e => {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }}
                className={classes}
            >
                <View />
            </div>
        );
    }
}