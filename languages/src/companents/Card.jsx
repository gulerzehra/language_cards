import Language from "./Language";
import Container from "react-bootstrap/esm/Container";
import Rox from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import Row from "react-bootstrap/Row";

const Card = () => {
  return (
    <Container className="rounded-3 mt-4" style={{ background: "#f48b29" }}>
      <h1>Languages</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
            </Col>
          );
        })}
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Card;
