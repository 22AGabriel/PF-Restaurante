import React from "react";
import { Container } from "react-bootstrap";
import Error from "../../img/Error.png"

const Error404 = () => {
  return (
    <Container className="my-5 bajarFooter">
      <div className="text-center">
        <img
          src={Error}
          alt="error404"
          className="w-error"
        />
      </div>
    </Container>
  );
};

export default Error404;
