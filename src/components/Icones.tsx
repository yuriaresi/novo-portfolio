import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const IconesDiv = styled.div`
display: grid;

#linkedin, #github{
    font-size:60px;
    color: rgb(162, 233, 103);
    :hover{
        transform: scale(1.05);}
}`

export const Icones = () => {
  return (
    <IconesDiv>
      <a  target="_blank" href="https://www.linkedin.com/in/yuriaresi/">
        <LinkedInIcon id="linkedin"/>
      </a>
      <a target="_blank" href="https://github.com/yuriaresi">
        <GitHubIcon id='github' />
      </a>
    </IconesDiv>
  );
};
