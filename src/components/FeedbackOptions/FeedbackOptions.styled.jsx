import styled from '@emotion/styled';

export const ControlsList = styled.ul`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  list-style-type: none;
  border-radius: 8px;
  padding-left: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ControlsItem = styled.li`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.rootsColors.colors.brown};
  box-sizing: border-box;
  width: 100%;
  max-width: 190px;
  cursor: pointer;
  transition: all 300ms linear;
  box-shadow: 2px 2px 15px ${({ theme }) => theme.rootsColors.colors.shadowBox};
  color: ${({ theme }) => theme.rootsColors.colors.white};
  padding: 15px 30px;

  :hover {
    background-color: ${({ theme }) => theme.rootsColors.colors.darkFont};
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 50px 0px;
  }

  @media (min-width: 1200px) {
    padding: 20px 55px;
  }
`;
