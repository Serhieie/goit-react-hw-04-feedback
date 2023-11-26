import PropTypes from 'prop-types';
import CalculatedStats from '../CalculatedStats';
import {
  StatItem,
  StatList,
  StatQuantity,
  QuantityArea,
} from './Statistics.styled';

export default function Statistics({
  marksKeys,
  marksValues,
  percentageOfPositive,
  totalFeedback,
}) {
  return (
    <StatList>
      <QuantityArea>
        {marksValues.map((value, i) => {
          return (
            <StatItem key={i}>
              {marksKeys[i]}:<StatQuantity>{value}</StatQuantity>
            </StatItem>
          );
        })}
      </QuantityArea>
      <CalculatedStats
        percentageOfPositive={percentageOfPositive}
        totalFeedback={totalFeedback}
      />
    </StatList>
  );
}

Statistics.propTypes = {
  marksKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  marksValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  percentageOfPositive: PropTypes.string.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
