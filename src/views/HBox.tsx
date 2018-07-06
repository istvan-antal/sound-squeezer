import React from 'react';
import './HBox.scss';

export default ({ children }: { children: JSX.Element | JSX.Element[] }) => (<div className="HBox">{children}</div>);