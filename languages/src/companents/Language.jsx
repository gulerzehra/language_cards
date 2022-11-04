import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Container
      className="p-4 rounded-2}"
      style={{ background: "peachpuff" }}
      onClick={() => setShowDesc(!showDesc)}
    >
      <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>

      <ul>
        {options.map((item) => {
          return <li className="h5 text-start">{item}</li>;
        })}
      </ul>
    </Container>
  );
};

export default Language;
