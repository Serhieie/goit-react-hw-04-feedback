import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 75px;
  width: 60%;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 60px black;
  min-height: 562px;
  position: relative;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.rootsColors.colors.lightyellow},
      ${({ theme }) => theme.rootsColors.colors.burlywood}
    );
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    border-radius: 10px;
    opacity: 0.88;
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 25px 6px;
    width: 90%;
    height: 80vh;
    gap: 30px;
  }
`;
