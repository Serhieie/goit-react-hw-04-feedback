import styled from '@emotion/styled';

export const CalculatedStatsText = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.rootsColors.colors.darkFont};
  margin: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    max-width: 320px;
    font-weight: 700;
    margin-top: 5px;
  }
`;
