import React, { Fragment} from "react";

import './Styles/Saludo.css'

const Saludo = ({title}) => {

    return(
        <Fragment>
            <section className="saludo saludo-slide-1">
      <div className="saludo-container">
        <article className="saludo-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡Sentite parte del equipo!
          </p>
          
        </article>
      </div>
    </section>
        </Fragment>
    );
};

export default Saludo;