import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background: #00b8e2;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 40px;
  width: 200px;

  padding: 0 10px;

  border-radius: 5px;
  border: 1px solid #c1c1c1;

  margin-right: 20px;
`;

export const SubmitButton = styled.button`
  height: 40px;
  width: 100px;

  background: #2e282a;

  border: 0;

  font-size: 16px;
  font-weight: bold;
  color: #fad8d6;

  transition: 300ms;

  &:hover {
    opacity: 0.9;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;
  padding: 40px 200px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 30px;
`;

export const SubTitle = styled.span`
  margin-top: 20px;
  font-size: 16px;
`;

export const DataBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Table = styled.div`
  margin-right: 40px;

  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

export const Item = styled.ul`
  display: flex;
  flex: 1;

  list-style: none;

  border-top: 1px solid #000;

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    border-bottom: 1px solid #000;
  }

  li {
    border-right: 1px solid #000;
    border-left: 0;

    width: 150px;
    padding: 3px 10px;

    &:first-child {
      width: 40px;
      text-align: center;
      border-left: 1px solid #000;
    }

    &:last-child {
      text-align: center;
    }
  }
`;
