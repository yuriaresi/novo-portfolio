import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const DivFooter = styled.div`
  /*rodape*/
  .main-footer {
    height: 100%;
    background: hsl(0, 0%, 0%);
    color: #fff;
  }

  .main-footer__row-1 {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    order: 2;
  }

  .main-footer__row-2 {
    max-width: 50rem;
  }

  .main-footer__upper {
    display: flex;
    justify-content: center;
    padding: 4rem 2em;
    background-color: black;
  }

  .main-footer__lower a {
    text-decoration: none;
    color: white;
  }

  .main-footer__lower a:hover {
    color: rgb(124, 136, 136);
  }

  .main-footer__lower p {
    font-size: 12px;
  }

  .main-footer__lower {
    padding: 3rem 0;
    border-top: 1px solid #444;
    color: #eee;
    font-size: 1.2rem;
    text-align: center;
    background-color: black;
  }

  .main-footer__social-cont {
    margin-top: 2rem;
  }

  span {
    vertical-align: inherit;
  }

  .main-footer__social-cont img {
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    .main-footer__upper {
      padding: 1em;
      align-items: center;
    }
    .main-footer__lower {
      display: flex;
      padding: 0;
      margin-bottom: 10px;
      justify-content: space-around;
    }

    .main-footer {
      display: flex;
      padding: 0 0 0 0;
      flex-direction: column;
    }
  }

  #whatsap {
    font-size: 50px;
    color: rgb(0, 230, 118);
  }
  #email{
    font-size:50px;
    color: #c02424;
  }
`;

export const Footer = () => {
  return (
    <DivFooter className="main-footer">
      <div className="main-footer__upper">
        <div className="main-footer__row-2">
          <div>
            <h2>Yuri Aresi</h2>
          </div>
          <div>
            <p>
              Um Desenvolvedor em aprendizagem focado no front-end, aberto a
              novas oportunidades
            </p>
          </div>
          <br />
          <div>
            <a href="https:/wa.me/5551991944447" target="_blank">
              <WhatsAppIcon id="whatsap" />
            </a>
            <a href="mailto:yuri.aresi10@gmail.com"><EmailIcon id="email"/></a>
          </div>
        </div>
      </div>
      <div className="main-footer__lower">
        <p>
          © Copyright 2024.Feito por{" "}
          <a target="_blank" href="https://www.linkedin.com/in/yuriaresi/">
            Yuri
          </a>
        </p>
      </div>
    </DivFooter>
  );
};
