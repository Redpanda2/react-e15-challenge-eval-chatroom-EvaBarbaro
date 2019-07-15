// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './settings.scss';

// == Composant
const Settings = ({ loginValue, changeInputValue, hideInputAction }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    hideInputAction();
  };

  const changeHandler = (event) => {
    changeInputValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} id="settings" autoComplete="off">
      <h1 id="settings-title">Chatroom</h1>
      <input
        onChange={changeHandler}
        value={loginValue}
        className="settings-message"
        id="settings-input"
        type="text"
        name="message"
      />
    </form>
  );
};

Settings.propTypes = {
  loginValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  hideInputAction: PropTypes.func.isRequired,
};


// == Export
export default Settings;
