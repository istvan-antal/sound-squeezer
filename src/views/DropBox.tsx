import * as React from 'react';
import './DropBox.scss';

const DropBox = (props: { state: string }) => (
    <div className={`DropBox ${props.state}`}>Drop zone</div>
);

export default DropBox;