import Jogo from "./jogo";
import Letras from "./Letras"
import GlobalStyle from "./styles/GlobalStyle";
import Chute from "./Chute";
import { useState } from "react";


export default function App() {
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [palavraOculta, setPalavraOculta] = useState("")
  const [qtdErros, setQtdErros] = useState(0)
  const [jogoAcabou, setJogoAcabou] = useState(false)
  const [comparaChute, setComparaChute] = useState("")
  
  
  

  return (
    <>
      <GlobalStyle />
      <Jogo 
      palavraEscolhida = {palavraEscolhida}
      setPalavraEscolhida = {setPalavraEscolhida}
      setComparaChute = {setComparaChute}
      palavraOculta = {palavraOculta}
      setPalavraOculta = {setPalavraOculta}
      qtdErros = {qtdErros}
      jogoAcabou = {jogoAcabou}
      />
      <Letras 
      palavraEscolhida = {palavraEscolhida}
      setPalavraEscolhida = {setPalavraEscolhida}
      palavraOculta = {palavraOculta}
      setPalavraOculta = {setPalavraOculta}
      qtdErros = {qtdErros}
      setQtdErros = {setQtdErros}
      jogoAcabou = {jogoAcabou}
      setJogoAcabou = {setJogoAcabou}
      />
      <Chute 
      comparaChute = {comparaChute}
      qtdErros = {qtdErros}
      setQtdErros = {setQtdErros}
      setPalavraOculta = {setPalavraOculta}
      setJogoAcabou = {setJogoAcabou}
      />
    </>
  );
}
