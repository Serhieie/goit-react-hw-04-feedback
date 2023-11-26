import PropTypes from 'prop-types';
import { NotoficationMessage } from './Notification.styled';
export default function Notification({ message }) {
  return <NotoficationMessage>{message}</NotoficationMessage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
