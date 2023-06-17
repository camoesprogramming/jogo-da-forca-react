import palavras from "./palavras"
import Jogo from "./jogo";
import Letras from "./Letras"
import GlobalStyle from "./styles/GlobalStyle";
import Chute from "./Chute";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <Jogo />
    <Letras />
    <Chute />
    </>
  );
}
