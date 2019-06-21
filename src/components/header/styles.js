import styled from 'styled-components';

export const MainHeader = styled.header`
  background: #0b2031;
  h1 {
    color: #fff;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 30px;

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainLogo = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 32px;
    height: 32px;
  }
  > h1 {
    margin-left: 15px;
    font-size: 18px;
  }
`;

export const MainUser = styled.div`
  /* border-right: 1px solid rgba(255, 255, 255, 0.3); */
  padding: 0 20px;
  display: flex;

  flex-direction: column;
  align-items: flex-end;
  line-height: 20px;
  h1 {
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
  }
  button {
    color: rgba(255, 255, 255, 0.6);
    background: none;
    border: 0;
    font-size: 14px;
    &:hover{
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;
