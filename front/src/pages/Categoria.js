import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Categoria() {
  const [resultadoApi, setresultadoApi] = useState({});

  const location = useLocation().pathname.substr(1);

  useEffect(() => {
    const llamadaApi = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACK_API_URL + "/api/getCuentosByCategoria",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categoria: location }),
        }
      )
        .then((resp) => resp.json())
        .catch((error) => console.log(error));

      setresultadoApi({ data: response });
    };
    llamadaApi();
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mt-2" key={location}>
      <div className="row">
        {resultadoApi.data &&
          resultadoApi.data.map((item, index) => {
            return (
              <div
                className="col-sm-12 col-md-8 col-lg-6 justify-content-center" key={index} >
                <Link to={{ pathname: "/cuento/", search: "?_id=" + item._id }}>
                  <div>
                    <h1>{item.titulo}</h1>
                    <p>{item.resumen}</p>
                    <p>{item.autor}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Categoria;
