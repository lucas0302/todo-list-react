import ToDoMain from "./components/ToDoMain";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {

  return (

    <Conteudo>
      <GlobalStyle/>
      <ToDoMain />
    </Conteudo>
  );
}

export default App;

const Conteudo = styled.div`
  max-width: 450px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`