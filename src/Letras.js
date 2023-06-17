import styled from "styled-components"

export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    return (
        <DivEngloba>
           {alfabeto.map((letra) => (<li key={letra}>{letra}</li>))}
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
        background: #9FAAB5;
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
        color: #798A9F;
        box-sizing:border-box;
    }
    
`