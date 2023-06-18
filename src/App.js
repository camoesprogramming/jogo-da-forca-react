import palavras from "./palavras"
import Jogo from "./jogo";
import Letras from "./Letras"
import GlobalStyle from "./styles/GlobalStyle";
import Chute from "./Chute";
import { useState } from "react";

export default function App() {
  const [palavraOculta, setPalavraOculta] = useState("")
  const [palavraEscolhida, setPalavraEscolhida] = useState("");

  return (
    <>
      <GlobalStyle />
      <Jogo 
      palavraOculta = {palavraOculta}
      setPalavraOculta = {setPalavraOculta}
      palavraEscolhida = {palavraEscolhida}
      setPalavraEscolhida = {setPalavraEscolhida}/>
      <Letras />
      <Chute />
    </>
  );
}
