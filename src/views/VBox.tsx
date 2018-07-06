import React from 'react';
import './VBox.scss';

export default ({ children }: { children: JSX.Element | JSX.Element[] }) => (<div className="VBox">{children}</div>);