import styled from '@emotion/styled';

export const StatList = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 700px;
  border-radius: 8px;
  padding-left: 0;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const QuantityArea = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style-type: none;
  border-radius: 8px;
  padding-left: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const StatItem = styled.li`
  font-size: 28px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.rootsColors.colors.burlywood};
  border-radius: 8px;
  color: ${({ theme }) => theme.rootsColors.colors.darkFont};
  box-shadow: 2px 2px 15px ${({ theme }) => theme.rootsColors.colors.shadowBox};

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
    gap: 15px;
  }

  @media (min-width: 1200px) {
    font-size: 34px;
    gap: 10px;
    font-weight: 600;
  }
`;

export const StatQuantity = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.rootsColors.colors.darkFont};
  opacity: 0.6;

  @media (max-width: 768px) {
    padding: 0;
    font-size: 45px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;
