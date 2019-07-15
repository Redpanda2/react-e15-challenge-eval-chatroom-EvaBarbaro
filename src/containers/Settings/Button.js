import { connect } from 'react-redux';

import SettingsButton from 'src/components/Settings/Button';
import { showInput } from 'src/store/reducer';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  showButtonAction: () => {
    dispatch(showInput());
  },
});

const SettingsButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsButton);

export default SettingsButtonContainer;
