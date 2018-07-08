import React from 'react';
import './VBox.scss';

type ChildrenValues = JSX.Element | string | boolean;
type Children = ChildrenValues | ChildrenValues[];

export default ({ children }: { children: Children }) => (<div className="VBox">{children}</div>);