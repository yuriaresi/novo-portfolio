import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { GiElephant } from "react-icons/gi";
import Grid from "@mui/material/Unstable_Grid2";

import styled from "styled-components";

const DivPrincipal = styled.div`
  h1 {
    display: flex;
    justify-content: center;
  }
  #divIcone {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 300px;
    font-size: 50px;
    padding: 10px;
    color: rgb(162, 233, 103);
  }
  ul{
    margin-top: 15px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    font-size: 25px;
    margin-left: 100px;
  }

  @media (max-width: 900px)
  {
    #softskill{
      margin-top: 100px;
    }
  }
`;

export const Habilidades = () => {
  return (
    <DivPrincipal>
      <Grid container spacing={2}>
        <Grid id="divHardSkills" xs={12} md={6}>
          <h1>HardSkills</h1>
          <div id="divIcone">
            <FaHtml5 />
            <SiCss3 />
            <FaBootstrap />
            <FaReact />
            <SiStyledcomponents />
            <FaNpm />
            <FaNodeJs />
            <IoLogoJavascript />
            <SiTypescript />
            <FaGitAlt />
            <FaGithub />
            <SiPrisma />
            <GiElephant />
          </div>
        </Grid>

        <Grid id="softskill" xs={12} md={6}>
          <h1>SoftSkills</h1>
          <div>
            <ul>
              <li>Trabalho em Equipe</li>
              <li>Organizado</li>
              <li>Autodidata</li>
              <li>Proativo</li>
              <li>Dedicado</li>
              <li>Criativo</li>
              <li>Disciplinado</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </DivPrincipal>
  );
};
