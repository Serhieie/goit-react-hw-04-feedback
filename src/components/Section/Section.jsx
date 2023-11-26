import PropTypes from 'prop-types';
import { SectionDiv, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionDiv>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionDiv>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
