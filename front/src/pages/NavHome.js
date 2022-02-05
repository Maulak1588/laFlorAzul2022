import React from "react";
import { NavLink } from "react-router-dom";

function NavHome() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-start">
            <NavLink to="/clasicos">
              <div className="box text-wrap color-b">
                <h1 className="title-box">clásicos</h1>
                <p>
                  Relatos clásicos seguidos de un análisis posterior, pues como
                  ha dicho Borges: “Prologar cuentos no leídos aún es tarea casi
                  imposible, ya que exige el análisis de tramas que no conviene
                  anticipar.”
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <NavLink to="/ruleta">
              <div className="box text-wrap color-o">
                <h1 className="title-box">ruleta</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  quae voluptatem hic reprehenderit magni dolore sed voluptate
                  illum fugiat molestias!
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex">
            <NavLink to="/contemporaneos">
              <div className="box text-wrap color-y">
                <h1 className="title-box">contemporáneos</h1>
                <p>
                  Autores consagrados, del momento y novedades que asoman con
                  potencia al mundo de las letras
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-start">
            <NavLink to="/notas">
              <div className="box text-wrap color-yw">
                <h1 className="title-box">notas</h1>
                <p>
                  No sólo de ficción está hecha la literatura. En ella habitan
                  las lecturas e interpretaciones, curiosidades y anécdotas que
                  alimentan la materia literaria.{" "}
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-end">
            <NavLink to="/epistolas">
              <div className="box text-wrap color-b">
                <h1 className="title-box">epístolas</h1>
                <p>
                  A través de cartas, numerosos autores nos han dejado opiniones
                  y valiosos puntos de vista sobre diversos temas literarios. En
                  esta sección encontrarás algunas de ellas.
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-end">
            <NavLink to="/quienes">
              <div className="box color-o">
                <h1 className="title-box">quiénes somos</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum maiores, modi quam voluptatibus molestiae temporibus.
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavHome;
