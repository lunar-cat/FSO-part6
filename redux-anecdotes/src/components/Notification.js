import { connect } from 'react-redux';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };
  return (
    <div style={style}>
      {props.notification}
    </div>
  );
};

const mapState = (state) => {
  return { notification: state.notification.content };
};
const ConnectedNotification = connect(mapState)(Notification);
export default ConnectedNotification;