// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';

// == Composant
const Form = ({ messageValue, changeInputValue, addMessageAction }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    addMessageAction();
  };

  const changeHandler = (event) => {
    changeInputValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} id="chat-form" autoComplete="off">
      <input
        onChange={changeHandler}
        value={messageValue}
        placeholder="Votre message"
        input="text"
        name="chat-message"
        id="chat-input"
      />
    </form>
  );
};

Form.propTypes = {
  messageValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  addMessageAction: PropTypes.func.isRequired,
};

// == Export
export default Form;
