import ButtonEK from "../components/buttonEK";
import Container from "../components/container";

export default function PageComponents() {
  return (
    <Container>
      <ButtonEK color="success" size="small">
        MaterialUI
      </ButtonEK>
      <ButtonEK className="bg-lime-600">Variante</ButtonEK>
      <ButtonEK color="error" size="small">
        Cancelar
      </ButtonEK>
    </Container>
  );
}
