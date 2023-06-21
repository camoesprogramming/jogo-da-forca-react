import styled from "styled-components";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras"



export default function Jogo({ palavraEscolhida, setPalavraEscolhida, palavraOculta, setPalavraOculta, qtdErros, jogoAcabou, setComparaChute }) {
    
    

    function escolherPalavra(listaDePalavras) {
        if (palavraEscolhida !== "") {
            window.location.reload(true)
            return;
        }

        let palavraRandomica = listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)];
        setComparaChute(palavraRandomica)
        
        let palavraOcultaEmUnderline = ""
        let palavraEscolhidaEmUnderLine = ""
        
        for (let i = 0; i < palavraRandomica.length; i++) {
            palavraOcultaEmUnderline += "_ "
            
        }
        
        for (let j = 0; j < palavraOcultaEmUnderline.length; j++) {
            if (j === 0 || j % 2 === 0 ) {
                palavraEscolhidaEmUnderLine += palavraRandomica[j/2]
            } else {
                palavraEscolhidaEmUnderLine += " "
            }
        }
        
        setPalavraOculta(palavraOcultaEmUnderline);
        setPalavraEscolhida(palavraEscolhidaEmUnderLine)
        

        
        
    }

    function atualizaImg() {
        if(qtdErros === 0) {
            return forca0;
        }
        
        if(qtdErros === 1) {
            return forca1;
        }
        if(qtdErros === 2) {
            return forca2;
        }
        if(qtdErros === 3) {
            return forca3;
        }
        if(qtdErros === 4) {
            return forca4;
        }
        if(qtdErros === 5) {
            return forca5;
        }
        if(qtdErros === 6) {
            return forca6;
        }

    }

    function corDaLetra() {
        if (qtdErros < 6 && jogoAcabou) {
            return "green"
        }
        if (jogoAcabou) {
            return "red"
        }
        return 
    }


    return (
        <DivEngloba>
            <LadoEsquerdo>
                <img src={atualizaImg()} alt = "imagem da forca"></img>
            </LadoEsquerdo>

            <LadoDireito>
                <button onClick = {() => escolherPalavra(palavras)}>Escolher Palavra</button>
                <div>
                    <p className= {corDaLetra()}> {palavraOculta}</p>
                </div>
            </LadoDireito>

        </DivEngloba>
    )

}

const DivEngloba = styled.div`
    display: flex;

`

const LadoEsquerdo = styled.div`
    width: 50%;
    img {
        margin-left: 40px;
        margin-top: 60px;
        width: 400px;
        height: 466px;
    }
`

const LadoDireito = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 90px;
    button {
        width: 200px;
        height: 60px;
        background: #27AE60;
        border-radius: 8px;
        border: none;
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
        &:hover {
            background-color: #27AE20;
            cursor: pointer;
        }
    }

    p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 68px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 282px;
    }
    
`