// == Import : npm
import React from 'react';

// == Import : local
import Settings from 'src/containers/Settings';
import Message from 'src/containers/Message';
import Form from 'src/containers/Form';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Settings />
    <Message />
    <Form />
  </div>
);

// == Export
export default App;
