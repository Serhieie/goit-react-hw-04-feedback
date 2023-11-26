import PropTypes from 'prop-types';
import { CalculatedStatsText } from './CalculatedStats.styled';

export default function CalculatedStats({
  percentageOfPositive,
  totalFeedback,
}) {
  return (
    <>
      <CalculatedStatsText>
        Positive Feedbacks: {percentageOfPositive}
      </CalculatedStatsText>
      <CalculatedStatsText>Total: {totalFeedback}</CalculatedStatsText>
    </>
  );
}

CalculatedStats.propTypes = {
  percentageOfPositive: PropTypes.string.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
