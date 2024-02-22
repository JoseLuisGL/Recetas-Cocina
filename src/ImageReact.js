import React from 'react';
import {Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function ImageReact({ url, rounded, nameClass }) {
  return (
    <Image src={url} rounded ={rounded} className={"w-50"}/>
  );
}

export default ImageReact;