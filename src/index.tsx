import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { getStore } from './store';
import App from './views/App';
import { StateStructure } from './reducers';
import { mapDispatchToProps } from './actions';

const mapStateToProps = (state: StateStructure) => state;

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

render(
    <Provider store={getStore()}>
        <ConnectedApp />
    </Provider>
, document.getElementById('app'));