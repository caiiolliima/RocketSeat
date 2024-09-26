import React, { useState } from 'react';
import { Container, Label, Inputs } from './input.styles';

export function Input() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedDate(value ? value : null);
  };

  return (
    <Container>
      {/* Exibe o label quando não há data selecionada */}
      {!selectedDate && <Label>Data de início:</Label>}
      <Inputs 
        type="date" 
        value={selectedDate || ''} 
        onChange={handleChange} 
      />
    </Container>
  );
}
