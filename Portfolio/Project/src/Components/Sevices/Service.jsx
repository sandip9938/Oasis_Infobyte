import React, { useState } from "react";
import './Service.css'

function Service() {
    const [togglestate,settogglestate]=useState(0)
    const toggletab=(index)=>{
        settogglestate(index)
    }
  return (
    <div>
      <section className="services_section">
        <h2 className="section_tittle">Service</h2>
        <div className="services_container container grid">

          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_tittle">Product <br/>Designer</h3>
            </div>
            <span className="services_button" onClick={()=>toggletab(1)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={togglestate ===1 ?"services_model active-model":"services_model"}>
              <div className="services_model-content">
                <i  onClick={()=>toggletab(0)}   className="uil uil-times services_model-close"></i>
                <h3 className="services_model-tittle">Web Designer</h3>
                <p className="services_model-description">
                  Service with more than 3 years of experience . Providing
                  quality work to clients and companies.
                </p>
                <ul />
                <ul className="services_model-services grid">


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Frontend.
                    </p>
                  </li>


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Website Design.
                    </p>
                  </li>


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Backend .
                    </p>
                  </li>



                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_tittle">Fronted,Backend <br />Devloper</h3>
            </div>
            <span className="services_button"onClick={()=>toggletab(2)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={togglestate ===2 ?"services_model active-model":"services_model"}>
              <div className="services_model-content">
                <i  onClick={()=>toggletab(0)}  className="uil uil-times services_model-close"></i>
                <h3 className="services_model-tittle">Fronted and Backend Devloper</h3>
                <p className="services_model-description">
                  Service with more than 3 years of experience . Providing
                  quality work to clients and companies.
                </p>
                <ul />
                <ul className="services_model-services grid">


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Frontend.
                    </p>
                  </li>


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Website Design.
                    </p>
                  </li>


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Backend .
                    </p>
                  </li>



                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_tittle">Ui/Ux <br /> Designer</h3>
            </div>
            <span onClick={()=>toggletab(3)} className="services_button">
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={togglestate ===3 ?"services_model active-model":"services_model"}>
              <div className="services_model-content">
                <i   onClick={()=>toggletab(0)}   className="uil uil-times services_model-close"></i>
                <h3 className="services_model-tittle">Ui/Ux Designer</h3>
                <p className="services_model-description">
                  Service with more than 3 years of experience . Providing
                  quality work to clients and companies.
                </p>
                <ul />
                <ul className="services_model-services grid">


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Frontend.
                    </p>
                  </li>


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Website Design.
                    </p>
                  </li>


                  <li className="services_model-service">
                    <i className="uil uil-check-circle services_model-icon"></i>
                    <p className="services_model-info">
                      I devlope the Backend .
                    </p>
                  </li>



                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Service;
