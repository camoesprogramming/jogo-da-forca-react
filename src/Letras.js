import styled from "styled-components"
import { useState } from "react";


export default function Letras({ palavraEscolhida, palavraOculta, setPalavraEscolhida, setPalavraOculta, qtdErros, setQtdErros, jogoAcabou, setJogoAcabou }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log(palavraEscolhida)
    const [listaLetrasClicadas, setListaLetrasClicadas] = useState([])
    // lista para guardar quais letras foram clicacadas

    function verificaLetraClicada(letraClicada) {
        console.log(jogoAcabou)

        if ((palavraEscolhida === "" || listaLetrasClicadas.includes(letraClicada)) || jogoAcabou) {
            return;
        } else {
            setListaLetrasClicadas([...listaLetrasClicadas, letraClicada])
        }

        if (!(palavraEscolhida.includes(letraClicada))) {
            if (qtdErros === 5) {
                setJogoAcabou(true)
            }
            setQtdErros(qtdErros + 1);
            return;
        }
        // primeiro transformamos as duas palavras em arrays
        const arrayPalavraEscolhida = palavraEscolhida.split('');
        const arrayPalavraOculta = palavraOculta.split('');

        // percorremos o array letra por letra na palavra escolhida, se for igual a letra clicada, 
        // substituimos na espaço correspondente à oculta e retiramos o espaço logo depois dos dois arrays
        for (let i = 0; i < arrayPalavraEscolhida.length; i++) {
            if (arrayPalavraEscolhida[i] === letraClicada) {
                arrayPalavraOculta[i] = letraClicada;
                arrayPalavraOculta[i + 1] = '';
                arrayPalavraEscolhida[i + 1] = '';
            }
        }

        // transformamos a nova array de cada palavra em palavra e setamos como palavraescolhida e palavra Oculta
        setPalavraOculta(arrayPalavraOculta.join(''))
        setPalavraEscolhida(arrayPalavraEscolhida.join(''))


    }







    return (
        <DivEngloba>
            {alfabeto.map((letra) => (
                <li
                    key={letra}
                    className={((palavraEscolhida !== "") && !listaLetrasClicadas.includes(letra)) ? "ativada" : "desativada"}
                    onClick={() => verificaLetraClicada(letra)}
                >{letra}
                </li>
            ))}
        </DivEngloba>
    )
}

const DivEngloba = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 37%;
    margin: auto;
    margin-top: 70px;
    
    li {
        min-width: 40px;
        min-height: 40px;
        margin-top: 12px;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 12px;
        font-family: 'Roboto';  
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        box-sizing:border-box;
    }
    
`