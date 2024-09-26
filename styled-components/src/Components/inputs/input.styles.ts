import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

export const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #aaa;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export const TextInput = styled.input`
  appearance: none;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &:not(:placeholder-shown) + ${Label}, 
  &:focus + ${Label} {
    display: none;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;
