import React, { useState } from 'react';
import { Container, Label, TextInput, ErrorMessage } from './input.styles';

export function Input() {
  const [dateInput, setDateInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2); // Adiciona a primeira barra
    if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5); // Adiciona a segunda barra
    if (value.length > 10) value = value.slice(0, 10); // Limita ao formato dd/MM/yyyy

    setDateInput(value); // Atualiza o valor do campo de texto
  };

  const handleFocus = () => {
    setIsFocused(true);
    setError(null); // Reseta o erro ao focar no input
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!isValidDate(dateInput)) {
      setError('Data inválida');
    }
  };

  // Função para validar a data no formato dd/MM/yyyy
  const isValidDate = (date: string): boolean => {
    if (date.length !== 10) return false;

    const [day, month, year] = date.split('/').map(Number);
    
    // Valida o mês
    if (month < 1 || month > 12) return false;

    // Valida o ano
    if (year < 1000 || year > 9999) return false;

    // Valida os dias com base no mês
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Verifica anos bissextos para fevereiro
    if (month === 2 && isLeapYear(year)) {
      daysInMonth[1] = 29; // Fevereiro em ano bissexto tem 29 dias
    }

    return day > 0 && day <= daysInMonth[month - 1];
  };

  // Função para verificar se é ano bissexto
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  return (
    <Container>
      {!isFocused && !dateInput && <Label>Data de início:</Label>}
      <TextInput
        type="text"
        value={dateInput}
        onChange={handleDateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // placeholder="dd/mm/yyyy"
        maxLength={10} // Limita a 10 caracteres (dd/MM/yyyy)
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
