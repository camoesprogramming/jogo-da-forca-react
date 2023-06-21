import styled from "styled-components"
import { useState } from "react";


export default function Letras({ palavraEscolhida, palavraOculta, setPalavraEscolhida, setPalavraOculta, qtdErros, setQtdErros, jogoAcabou, setJogoAcabou }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log(palavraEscolhida)
    const [listaLetrasClicadas, setListaLetrasClicadas] = useState([])
    // lista para guardar quais letras foram clicacadas



    function verificaLetraClicada(letraClicada) {
        
        // se a palavra foi escolhida, ou a letra clicada ja foi clicada ou o jogoAcabou, retornamos se não adicionamos a letra na lista   
        // de letras clicadas e prosseguimos
        if ((palavraEscolhida === "" || listaLetrasClicadas.includes(letraClicada)) || jogoAcabou) {
            return;
        } else {
            setListaLetrasClicadas([...listaLetrasClicadas, letraClicada])
        }

        // se a palavra escolhida não inclui a letra clicada, adicionamos + 1 erro e caso ja tenha 5, setamos jogo acabou true
        // caso não seja 5 adicionamos mais um erro e retornamos
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
        // substituimos na espaço correspondente à oculta e retiramos o espaço logo depois, dos dois arrays


        for (let i = 0; i < arrayPalavraEscolhida.length; i++) {
            if (arrayPalavraEscolhida[i] === letraClicada) {
                arrayPalavraOculta[i] = letraClicada;
                arrayPalavraOculta[i + 1] = '';
                arrayPalavraEscolhida[i + 1] = '';
            }
        }

        const novaPalavraOculta = arrayPalavraOculta.join('')
        const novaPalavraEscolhida = arrayPalavraEscolhida.join('')

        if(novaPalavraOculta === novaPalavraEscolhida) {
            setJogoAcabou(true)
        }




        // transformamos a nova array de cada palavra em palavra e setamos como palavraescolhida e palavra Oculta
        setPalavraOculta(novaPalavraOculta)
        setPalavraEscolhida(novaPalavraEscolhida)

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