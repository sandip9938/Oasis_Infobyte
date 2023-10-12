import React from "react";
import "./Qua.css";

function Qualification() {
  return (
    <div>
      <section className="qua section">
        <h2 className="section_tittle">Qualification</h2>
        <div className="qua_container container">
          <div className="qua_tabs">
            <div className="qua_button button--flex">
              <i className="uil uil-graduation-cap qua_icon"></i>Education
            </div>
</div>
           

          <div className="qua_sections">
            <div className="qua_content-active">
              <div className="qua_data">
                <div>
                  <h3 className="qua_tittle">B.tech in Computer Science</h3>
                  <span className="qua_subtittle">
                    Biju Pattnaik university(ODISHA)
                  </span>
                  <div className="qua_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2020-2024
                  </div>
                </div>
                <div>
                  <span className="qua_rounder"></span>
                  <div className="qua_line"></div>
                </div>
              </div>
              <div className="qua_data">
                <div>
                  <h3 className="qua_tittle">FullStack Web Devloper</h3>
                  <span className="qua_subtittle">
                   Pw Skill
                  </span>
                  <div className="qua_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023/jan/1-2023/oct/2
                  </div>
                </div>
               
              </div>

              <div className="qua_data">
                <div>
                  <h3 className="qua_tittle">Saraswati Shishu vidya Mandir</h3>
                  <span className="qua_subtittle">
                   !0th passout
                  </span>
                  <div className="qua_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2020
                  </div>
                </div>
               
              </div>

              <div className="qua_data">
                <div>
                  <h3 className="qua_tittle">12th in Science</h3>
                  <span className="qua_subtittle">
                   Khalikote Junior college
                  </span>
                  <div className="qua_calender">
                    <i className="uil uil-calendar-alt"></i>
                  2020-20222
                  </div>
                </div>
               
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
   
  );
}

export default Qualification;
