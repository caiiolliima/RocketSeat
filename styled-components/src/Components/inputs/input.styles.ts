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

export const Inputs = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0; /* Remove o ícone do calendário */
  }

  /* Estilos quando o campo de data tem um valor */
  &:not(:placeholder-shown) + ${Label}, 
  &:focus + ${Label} {
    display: none;
  }
`;
