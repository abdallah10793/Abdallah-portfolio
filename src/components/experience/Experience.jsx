import React from "react";
import "./experience.css";
import { FaLaptop } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>MERN Stack Developer</h2>
      <div className="container experience_container">

        {/* frontend section*/}

        <div className="experience_frontend">
          <h3><FaLaptop /> Frontend </h3>
          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive className="about_icon"/>
              <div>
                <h4>HTML5</h4>
                <div className="text-light skill-percent">
                  <div class="skills html">90%</div>
                </div>
              </div>
            </article>
            <article className="experience_details">
              <SiCsswizardry  className="about_icon"/>
              <div>
                <h4>CSS3</h4>
                <div className="text-light skill-percent">
                  <div class="skills css">85%</div>
                </div>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript className="about_icon"/>
              <div>
                <h4>JavaScript</h4>
                <div className="text-light skill-percent">
                  <div class="skills js">90%</div>
                </div>
              </div>
            </article>
            <article className="experience_details">
              <SiBootstrap className="about_icon"/>
              <div>
              <h4>Bootstrap</h4>
              <div className="text-light skill-percent">
                <div class="skills bootstrap">95%</div>
              </div>
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="about_icon"/>
              <div>
              <h4>Tailwind</h4>
              <div className="text-light skill-percent">
                <div class="skills tailwind">75%</div>
              </div>
              </div>
            </article>
            <article className="experience_details">
              <SiReact className="about_icon"/>
              <div>
              <h4>React</h4>
              <div className="text-light skill-percent">
                <div class="skills react">80%</div>
              </div>
              </div>
            </article>
          </div>
        </div>

        {/* Backend section*/}

        <div className="experience_backend">
          <h3><FaCode /> Backend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className="about_icon"/>
              <div>
              <h4>Node JS</h4>
              <div className="text-light skill-percent">
                <div class="skills node">90%</div>
              </div>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress className="about_icon"/>
              <div>
              <h4>Express</h4>
              <div className="text-light skill-percent">
                <div class="skills express">85%</div>
              </div>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="about_icon"/>
              <div>
              <h4>MongoDB</h4>
              <div className="text-light skill-percent">
                <div class="skills mongo">90%</div>
              </div>
              </div>
            </article>
            <article className="experience_details">
              <GrMysql className="about_icon"/>
              <div>
              <h4>My SQL</h4>
              <div className="text-light skill-percent">
                <div class="skills sql">75%</div>
              </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
