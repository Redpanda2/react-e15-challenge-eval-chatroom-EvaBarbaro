// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Content from './Content';
import './message.scss';

// == Composant
const Message = ({ messages }) => (
  <div id="user">
    {messages.map(message => (
      <Content
        key={message.id}
        {...message}
      />
    ))}
  </div>
);

Message.propTypes = {
  messages: PropTypes.array.isRequired,
};

// == Export
export default Message;
