import * as React from 'react';
import './DropBox.scss';
import DropIcon from './DropIcon';
import VBox from './VBox';

const DropBox = (props: { state: string }) => (
    <div className={`DropBox ${props.state}`}>
        <VBox>
            <DropIcon />
            Drag & Drop audio files to convert them to MP3.
        </VBox>
    </div>
);

export default DropBox;