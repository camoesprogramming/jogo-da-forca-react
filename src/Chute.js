import { useState } from "react"
import styled from "styled-components"

export default function Chute({ comparaChute, qtdErros, setQtdErros, setPalavraOculta, setJogoAcabou }) {
    const [palavraChutada, setPalavraChutada] = useState("");


    function verificaChute() {
        if (comparaChute === palavraChutada) {
            setPalavraOculta(comparaChute)
            setJogoAcabou(true)
        } else {
            // caso a palavra chutada tenha menos de 6 caracteres
            if (palavraChutada.length < 6) {
                // se a quantidade de letras chutadas menos a quantidade
                if (palavraChutada.length - qtdErros < 6) {
                    setQtdErros(palavraChutada.length - qtdErros);
                } else {
                    setQtdErros(6)
                    setJogoAcabou(true)
                }

            } else {
                setQtdErros(6)
                setJogoAcabou(true)
            }
        }

    }

    return (
        <DivEngloba className={comparaChute !== "" ? "displayFlex" : "hidden"}>
            <p> Já sei a palavra!</p>
            <input onChange={(event) => setPalavraChutada(event.target.value)}></input>
            <button onClick={() => verificaChute()}>Chutar</button>
        </DivEngloba>


    )
}

const DivEngloba = styled.div`
    width: 35%;
    margin: auto;
    margin-top: 64px;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }

    input {
        box-sizing: border-box;
        width: 353px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #CCCCCC;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        margin-left: 12px;

        &:hover {
            cursor: text;
        }

        &:focus {
            outline: none;
        }
    }

    button {

        box-sizing: border-box;
        width: 100px;
        height: 40px;
        background: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        margin-left: 15px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #3C76A1;

        &:hover {
            cursor: pointer;
        }

    }
`