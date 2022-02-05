import { React, Component, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Comentario from "./Comentario";

function Cuento() {
  const [resultadoApi, setresultadoApi] = useState({});

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const llamadaApi = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACK_API_URL + "/api/getCuento",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: searchParams.get("_id") }),
        }
      )
        .then((resp) => resp.json())
        .catch((error) => console.log(error));

      setresultadoApi({ data: response });
    };
    llamadaApi();
  }, [searchParams.get("_id")]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mt-2">
      <div className="row cuento">
        {resultadoApi.data &&
          resultadoApi.data.map((item, index) => {
            return (
              <div key={item._id}>
                <div
                  className="col-lg-12 d-flex justify-content-center"
                  key={index}
                >
                  <div>
                    <h1>{item.titulo}</h1>
                    <h3>{item.autor}</h3>
                    <p style={{ whiteSpace: "pre-wrap" }}>{item.contenido}</p>
                  </div>
                  <br />
                </div>

                <hr />
                <h5>Comentarios:</h5>
                {item.comentario.map((item, index) => {
                  return (
                    <div key={index}>

                      <p>{item.body}, {item.date}</p>
                    </div>
                  );
                })}

                <Comentario />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cuento;
