import { useState } from "react";
import styled from "styled-components";
import logoyuri from "../assets/image-removebg-preview.png";

const HeaderStyled = styled.header`
  background-color: black;
  padding-inline: 16px;
  position: fixed;
  width: 100vw;

  #nav {
    max-width: 1280px;
    height: 70px;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #link {
    color: rgb(163, 233, 107);
    text-decoration: underline;
  }
  }
  
  #logo {
    width: 200px;
    margin-top: 5px;
  }
  #nav-list {
    display: flex;
    gap: 32px;
    list-style: none;

    a {
      font-size: 18px;
      color: #fff;
      padding-block: 16px;
      text-decoration: none;
    }
  }

  #hamburguer {
    display: none;
    border: none;
    background: none;
    border-top: 3px solid #fff;
    cursor: pointer;
  }

  #hamburguer:before,
  #hamburguer:after {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    background: #fff;
    margin-top: 5px;
    position: relative;
    transition: 0.3s;
  }

  
  @media (max-width: 750px) {
    #hamburguer {
      display: none;
      z-index: 1;
    }

    #nav-list {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      clip-path: circle(100px at 90% -15%);
      transition: 1s ease-out;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 0;
      pointer-events: none;
      a {
        font-size: 24px;
        opacity: 0;
      }
    }
    #nav-list li:nth-child(1) a {
      transition: 0.5s 0.2s;
    }
    #nav-list li:nth-child(2) a {
      transition: 0.5s 0.4s;
    }
    #nav-list li:nth-child(3) a {
      transition: 0.5s 0.6s;
    }
    #nav-list li:nth-child(4) a {
      transition: 0.5s 0.8s;
    }

    #nav.active #nav-list {
      clip-path: circle(1500px at 90% -15%);
      pointer-events: all;

      a {
        opacity: 1;
      }
    }

    #nav.active #hamburguer {
      position: fixed;
      top: 26px;
      right: 16px;
      border-top-color: transparent;
    }
    #nav.active #hamburguer:before {
      transform: rotate(135deg);
    }

    #nav.active #hamburguer:after {
      transform: rotate(-135deg);
      top: -7px;
    }
  }
`;

interface HeaderProps {
  inicio: string;
  sobre: string;
  habilidades: string;
  projetos: string;
  contato: string;
}

export function Header(props: HeaderProps) {
  const [navAtiva, setNavAtiva] = useState(false);

  const handleClick = () => {
    setNavAtiva(!navAtiva);
  };

  return (
    <HeaderStyled>
      <nav id="nav" className={navAtiva ? "active" : ""}>
        <a href="/">
          <img id="logo" src={logoyuri} alt="logoyuri" />
        </a>
        <button id="hamburguer" onClick={handleClick}></button>
        <ul id="nav-list">
          <li>
            <a href={props.inicio}>Inicio</a>
          </li>
          <li>
            <a href={props.sobre}>Sobre mim</a>
          </li>
          <li>
            <a href={props.habilidades}>Habilidades</a>
          </li>
          <li>
            <a href={props.projetos}>Projetos</a>
          </li>
          <li>
            <a href={props.contato}>Contato</a>
          </li>
          <li>
            <a
              id="link"
              href="https://drive.usercontent.google.com/download?id=1nAxisUN6krWg8byC8YZYbI2pVk6O39QG&export=download&authuser=0&confirm=t&uuid=d9e53cfa-e4ee-48bf-b19a-c97ddb748c82&at=APZUnTWYpQUmzme4t-aH7PPB7trT:1706742075849"
            >
              Download curriculo
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
