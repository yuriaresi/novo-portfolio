import styled from "styled-components";

const TextoAnimad = styled.div`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  span {
    position: relative;
  }
  span:before {
    content: "";
    color: rgb(161, 233, 103);
    animation: palavras 14s infinite;
  }
  span:after {
    content: "";
    position: absolute;
    height: 100%;
    border-left: 2px solid rgb(161, 233, 103);
    right: -10px;
    animation: cursor 0.9s infinite, digita 14s steps(15) infinite;
    width: calc(100% + 18px);
    background: rgb(14, 12, 12);
  }
  @media (max-width: 750px) {
    span:after {
      background: rgb(14, 12, 12);
    }
  }

  @keyframes digita {
    10%,
    15%,
    30%,
    35%,
    50%,
    55%,
    70%,
    75%,
    90%,
    95% {
      width: 0;
    }
    5%,
    20%,
    25%,
    40%,
    45%,
    60%,
    65%,
    80%,
    85% {
      width: calc(100% + 18px);
    }
  }
  @keyframes cursor {
    0% {
      border-left: 2px solid rgb(9, 7, 7);
    }
  }

  @keyframes palavras {
    0%,
    19.999% {
      content: "Full Stack.";
    }

    20%,
    39.999% {
      content: "Front-end.";
    }

    40%,
    59.999% {
      content: "Front-end.";
    }

    60%,
    79.999% {
      content: "Back-end.";
    }

    80%,
    100% {
      content: "Back-end.";
    }
  }
`;

export function TextoAnimado() {
  return (
    <TextoAnimad>
      <p>Olá, me chamo Yuri.</p>
      <br />
      Desenvolvedor <span></span>
      <br />
      <br />
      <p>Apaixonado por Tecnologia e jogos. </p>
      <br />
      <p>Novo Hamburgo, Rio grande do Sul</p>
    </TextoAnimad>
  );
}
