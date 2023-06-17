import styled from "styled-components";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

export default function Jogo() {
    const palavra = "_ _ _ _ _ _ _ _ _"

    return (
        <DivEngloba>
            <LadoEsquerdo>
                <img src={forca0}></img>
            </LadoEsquerdo>

            <LadoDireito>
                <button>Escolher Palavra</button>
                <div>
                    <p> {palavra}</p>
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
        color: #000000;
        margin-top: 282px;
    }
    
`