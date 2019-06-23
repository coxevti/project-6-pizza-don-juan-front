import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: 30px;
  > h1 {
    font-size: 18px;
  }
`;

export const OrderList = styled.article`
  background: #fff;
  border: 0;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 15px;
    line-height: 20px;
    > h1 {
      font-size: 18px;
      font-weight: normal;
      color: #0b2031;
      text-transform: capitalize;
    }
    > h2 {
      font-size: 11px;
      color: #706e7b;

      font-weight: normal;
    }
    > span {
      font-size: 16px;
      font-weight: bold;
    }
  }
  > p {
    margin-top: 18px;
    font-size: 14px;
  }
`;

export const ProductsList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 15px;
  li {
    width: 216px;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px;
    margin-top: 15px;
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(3n-2) {
      margin-left: 0;
    }
    margin-left: 15px;
    img {
      width: 61px;
      height: 61px;
      border-radius: 5px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 18px;
      margin-left: 8px;
      > h1 {
        font-size: 13px;
        margin-top: 8px;
        font-weight: normal;
      }
      > h2 {
        font-size: 11px;
        color: #706e7b;
        font-weight: normal;
      }
    }
  }
`;
