import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function Swagger() {
  return (
    <div className="Swagger">
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"/>
    </div>
  );
}

export default Swagger;