import ButtonEK from "../components/buttonEK";
import Container from "../components/container";

export default function PageComponents() {
  return (
    <Container className="flex gap-4 ">
      <ButtonEK color={"warning"} size="small">
        Aviso
      </ButtonEK>
      <ButtonEK color="success" size="small">
        Sucesso
      </ButtonEK>
      <ButtonEK color="error" size="small">
        Cancelar
      </ButtonEK>
      <ButtonEK color="brand" size="small">
        Nulo
      </ButtonEK>
      <ButtonEK color="info" size="small">
        Informação
      </ButtonEK>
      <ButtonEK color="inherit" size="small">
        Cancelar
      </ButtonEK>
    </Container>
  );
}
