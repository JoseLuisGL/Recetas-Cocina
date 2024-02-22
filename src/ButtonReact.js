import React from 'react';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function ButtonReact({ text, disabled }) {
  return (
    <button type="button" disabled={disabled}>
      {text}
    </button>
  );
}

export default ButtonReact;