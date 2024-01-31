import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "styled-components";
import growtwitter from "../assets/growtwitter.jpg";
import apiRick from "../assets/apirick.jpg";
import biblioteca from "../assets/biblioteca.jpg";
import softskills from "../assets/softskills.jpg";
import galaxia from "../assets/galaxia.jpg";

const DivPrincipal = styled.div`
margin-bottom: 150px;
  #teste {
    display: flex;
  }
  #divBotao {
    display: flex;
    justify-content: space-between;
    a {
      color: rgb(162, 233, 103);
      text-decoration: none;
    }
  }
  #cardbackground {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #2726265f;

    color: white;
    p {
      color: white;
    }
    #cardImg {
      background-size: contain; /* Ajuste conforme necessário: 'cover', 'contain', '100% 100%', etc. */
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .divcard {
    display: flex;
  }

  @media (max-width: 900px) {
    .divcard {
      display: flex;
      justify-content: center;
    }
  }
`;
export const Projetos = () => {
  return (
    <>
      <DivPrincipal>
        <Grid id="teste" container spacing={2}>
          <Grid className="divcard" xs={12} md={3}>
            <Card id="cardbackground" sx={{ maxWidth: 345 }}>
              <CardMedia
                id="cardImg"
                sx={{ height: 240 }}
                image={growtwitter}
                title="growtwitter"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GrowTwitter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  O GrowTwitter é uma aplicação de rede social inspirada no
                  Twitter, desenvolvida como projeto final do bloco
                  intermediário. A plataforma oferece funcionalidades
                  essenciais, incluindo a capacidade de criar usuários, fazer
                  login, criar tweets, listar todos os tweets e exibir tweets do
                  perfil logado. Além disso, há uma funcionalidade para editar o
                  perfil do usuário, permitindo a alteração de nome, apelido e
                  foto.
                </Typography>
              </CardContent>
              <CardActions id="divBotao">
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://growtwitter-psi.vercel.app/login"
                  >
                    Deploy
                  </a>
                </Button>
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://github.com/yuriaresi/growtwitter-front.git"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="divcard" xs={12} md={3}>
            <Card id="cardbackground" sx={{ maxWidth: 345 }}>
              <CardMedia
                id="cardImg"
                sx={{ height: 240 }}
                image={apiRick}
                title="apiRick"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  API Rick and Morty
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uma aplicação web dinâmica baseada na popular série Rick and
                  Morty. Utilizei a API oficial para exibir detalhes dos
                  personagens em páginas HTML interativas. Adicionei estilo com
                  CSS, incluindo animações envolventes, e integrei elementos do
                  Bootstrap para uma interface moderna. A aplicação é totalmente
                  responsiva, garantindo uma experiência perfeita em qualquer
                  dispositivo. É uma combinação perfeita de funcionalidade,
                  design e acessibilidade.
                </Typography>
              </CardContent>
              <CardActions id="divBotao">
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://atividade-final-de-modulo-front-end-iii-x2mv-pws8cubc4.vercel.app"
                  >
                    Deploy
                  </a>
                </Button>
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://github.com/yuriaresi/Atividade-Final-de-Modulo---Front-End-III.git"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="divcard" xs={12} md={3}>
            <Card id="cardbackground" sx={{ maxWidth: 345 }}>
              <CardMedia
                id="cardImg"
                sx={{ height: 240 }}
                image={biblioteca}
                title="A biblioteca Magica"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  A biblioteca Magica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uma aplicação CRUD (Create, Read, Update, Delete) baseada em
                  uma biblioteca mágica, desenvolvida utilizando React, Styled
                  Components e Bootstrap. Os usuários podem adicionar, remover,
                  visualizar e editar informações de livros de forma intuitiva e
                  segura. É uma solução eficaz e moderna para gerenciar uma
                  biblioteca de maneira simples e elegante.
                </Typography>
              </CardContent>
              <CardActions id="divBotao">
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://a-biblioteca-encantada-git-main-yuriaresi04.vercel.app"
                  >
                    Deploy
                  </a>
                </Button>
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://github.com/yuriaresi/A-biblioteca-encantada"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="divcard" xs={12} md={3}>
            <Card id="cardbackground" sx={{ maxWidth: 345 }}>
              <CardMedia
                id="cardImg"
                sx={{ height: 240 }}
                image={softskills}
                title="Soft skills"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Soft skills
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Um projeto feito com o grupo de colegas da growdev, onde
                  usamos REACT e REACTDOM para mostrarmos nossas soft skills.
                </Typography>
              </CardContent>
              <CardActions id="divBotao">
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://eficiencia-pdda5jrx8-yuriaresi04.vercel.app"
                  >
                    Deploy
                  </a>
                </Button>
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://github.com/yuriaresi/eficiencia"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="divcard" xs={12} md={3}>
            <Card id="cardbackground" sx={{ maxWidth: 345 }}>
              <CardMedia
                id="cardImg"
                sx={{ height: 240 }}
                image={galaxia}
                title="Api da Galaxia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Api da Galaxia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore o cosmos com nossa API galáctica! Descubra planetas,
                  luas, estrelas e asteroides em uma jornada cósmica única.
                  Viaje pelas estrelas e desvende os segredos do universo nessa
                  incrivel API
                </Typography>
              </CardContent>
              <CardActions id="divBotao">
                <Button size="small">
                  <a target="_blank" href="https://api-stars.vercel.app">
                    Deploy
                  </a>
                </Button>
                <Button size="small">
                  <a
                    target="_blank"
                    href="https://github.com/yuriaresi/API-Stars.git"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </DivPrincipal>
    </>
  );
};
