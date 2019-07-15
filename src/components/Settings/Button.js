// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './settings.scss';

// == Composant
const Settings = ({ showButtonAction }) => {
  const clickHandler = () => {
    // setTimeout(() => showButtonAction(), 300);
    showButtonAction();
  };

  return (
    <form id="settings" autoComplete="off">
      <h1 id="settings-title">Chatroom</h1>
      <p onClick={clickHandler} className="settings-before">+</p>
    </form>
  );
};
Settings.propTypes = {
  showButtonAction: PropTypes.func.isRequired,
};

// == Export
export default Settings;
