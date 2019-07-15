import { connect } from 'react-redux';

import Message from 'src/components/Message';

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = () => ({

});

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

export default MessageContainer;
