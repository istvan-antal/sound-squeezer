import * as React from 'react';
import './DropBox.scss';

const DropBox = (props: { state: string }) => (
    <div className={`DropBox ${props.state}`}>
        Drag & Drop audio files to convert them to MP3.
    </div>
);

export default DropBox;