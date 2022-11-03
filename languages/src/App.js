import Card from "./companents/Card";
import Header from "./companents/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <Card />
    </Container>
  );
}

export default App;
