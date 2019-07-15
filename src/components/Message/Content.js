// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './message.scss';

// == Composant
const Message = ({ labelMessage, labelLogin }) => (
  <>
    <p id="user-id">{labelLogin}</p>
    <p id="user-message">{labelMessage}</p>
  </>
);

Message.propTypes = {
  labelMessage: PropTypes.string.isRequired,
  labelLogin: PropTypes.string.isRequired,
};

// == Export
export default Message;
