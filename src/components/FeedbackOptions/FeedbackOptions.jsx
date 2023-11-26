import PropTypes from 'prop-types';
import { ControlsList, ControlsItem } from './FeedbackOptions.styled';

export default function Controls({ marksKeys, onLeaveFeedback }) {
  return (
    <ControlsList>
      {marksKeys.map(key => (
        <ControlsItem key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </ControlsItem>
      ))}
    </ControlsList>
  );
}

Controls.propTypes = {
  marksKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
