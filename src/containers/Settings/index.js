import { connect } from 'react-redux';

import Settings from 'src/components/Settings';

const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = () => ({

});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
