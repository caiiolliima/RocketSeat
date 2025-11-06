import Container from "../components/container";
import Text from "../components/text";

export default function Header() {
  return (
    <>
      <Container as="header" className="mt-3 md:mt-20">
        <Text className="!text-black ml-30" variant={"body-md-bold"}>
          Componentes EKSphere
        </Text>
      </Container>
    </>
  );
}
