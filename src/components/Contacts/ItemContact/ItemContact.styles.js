import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const IndexNumber = styled.span`
  margin-right: 5px;
`;

const Name = styled.span`
  margin-right: 5px;
`;

const Number = styled.span`
  color: grey;
`;

const ButtonDelete = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  margin-left: auto;
  padding: 5px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  background-color: darkgrey;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    background-color: red;
  }
`;

export { Container, IndexNumber, Name, ButtonDelete, Number };
