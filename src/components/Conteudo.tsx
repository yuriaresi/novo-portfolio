import Grid from "@mui/material/Unstable_Grid2";
import { TextoAnimado } from "./TextoAnimado";
import imagem from "../assets/Imagem do WhatsApp de 2024-01-31 à(s) 13.00.48_349cc429.jpg";
import imagemsobre from "../assets/perfil.jpg";
import styled from "styled-components";
import { Header } from "./Header";
import { Habilidades } from "./Habilidades";
import { Icones } from "./Icones";
import { Projetos } from "./Projetos";
import { Footer } from "./Footer";

const DivConteudo = styled.main`
  #divIcones {
    position: fixed;
    top: 150px;
    right: 20px;
  }
  #imagem {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin: 30px;
    border: solid 5px white;
  }

  #divImagem {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: end;
  }

  #divTexto {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #sobre,
  #habilidades,
  #projetos {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }

  #divSobre {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: start;
      padding: 20px;
      font-size: 1.5rem;
    }
  }
  #divImageSobre {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #imageSobre {
    width: 270px;
    border-radius: 50%;
    margin: 30px;
    border: solid 5px white;
  }

  @media (max-width: 900px) {
    #divIcones {
      display: none;
    }
    #imagem {
      width: 200px;
      height: 200px;
    }

    #divImagem {
      justify-content: center;
      height: 30%;
      margin-top: 150px;
    }
    #sobre {
      justify-content: center;
    }
    #divImageSobre {
      justify-content: center;
    }
  }
  #divHabilidades{
    margin-top:50px;
  }
`;

export function Conteudo() {
  return (
    <>
      <Header
        inicio="#inicio"
        sobre="#sobreMim"
        habilidades="#minhasHabilidades"
        projetos="#projetos"
        contato="#contato"
      />

      <DivConteudo>
        <div id="divIcones">
          <Icones />
        </div>
        <Grid id="inicio" container spacing={2}>
          <Grid id="divImagem" xs={12} md={6}>
            <div>
              <img id="imagem" src={imagem} alt="" />
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div id="divTexto">
              <TextoAnimado />
            </div>
          </Grid>
          <Grid id="sobreMim" xs={12}></Grid>

          <Grid id="sobre" xs={12}>
            <h1> Sobre mim</h1>
          </Grid>
          <Grid id="divSobre" xs={12} md={8}>
            <p>
              Duas vezes Aluno destaque da 15º edição do curso Web Full Stack
              pela Growdev, além de ser um Operador de CNC com formação em
              Técnico em Mecânica. Sou conhecido por ser um trabalhador
              dedicado, ter habilidades em trabalho em equipe, ser organizado,
              proativo, paciente e ter muita vontade de aprender. Estou sempre
              buscando novos desafios e oportunidades para aprimorar minhas
              habilidades e conhecimentos.
            </p>
          </Grid>
          <Grid id="divImageSobre" xs={12} md={4}>
            <img id="imageSobre" src={imagemsobre} alt="imagemsobre" />
          </Grid>
          <Grid id="minhasHabilidades" xs={12}></Grid>

          <Grid id="habilidades" xs={12}>
            <h1>Habilidades</h1>
          </Grid>
          <Grid id="divHabilidades" xs={12}>
            <Habilidades />
          </Grid>
          {/* <Grid id="projetos" xs={12}></Grid> */}
          <Grid id="projetos" xs={12}>
            <h1>Projetos</h1>
          </Grid>
          <Grid id="meusProjetos" xs={12}>
            <Projetos />
          </Grid>
        </Grid>
        <Footer />
        <Grid id="contato" xs={12}></Grid>
      </DivConteudo>
    </>
  );
}
