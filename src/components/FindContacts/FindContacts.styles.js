import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Filter = styled.input.attrs(() => ({
  type: 'text',
  name: 'filter',
  autoComplete: 'off',
}))`
  margin-top: 5px;
`;

export { Label, Filter };
