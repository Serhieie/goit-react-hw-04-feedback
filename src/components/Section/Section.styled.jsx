import styled from '@emotion/styled';

export const SectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 8px;
  padding-left: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.rootsColors.colors.darkFont};
`;
