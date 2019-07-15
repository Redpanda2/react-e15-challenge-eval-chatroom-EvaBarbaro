import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { changeMessageInput, addMessage } from 'src/store/reducer';

const mapStateToProps = state => ({
  messageValue: state.messageValue,
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (newInputValue) => {
    dispatch(changeMessageInput(newInputValue));
  },
  addMessageAction: () => {
    dispatch(addMessage());
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
