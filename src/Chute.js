import styled from "styled-components"

export default function Chute({palavraEscolhida}) {
    return (
        <DivEngloba className={palavraEscolhida !== "" ? "displayFlex" : "hidden"}>
            <p> Já sei a palavra!</p>
            <input></input>
            <button>Chutar</button>
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