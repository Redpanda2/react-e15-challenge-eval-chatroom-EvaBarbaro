import { connect } from 'react-redux';

import SettingsInput from 'src/components/Settings/Input';
import { changeLoginInput, hideInput } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginValue: state.loginValue,
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (newInputValue) => {
    dispatch(changeLoginInput(newInputValue));
  },
  hideInputAction: () => {
    dispatch(hideInput());
  },
});

const SettingsInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsInput);

export default SettingsInputContainer;
