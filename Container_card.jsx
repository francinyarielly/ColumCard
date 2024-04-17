import Button from "../Button/Button";
import "./Container_card.css"

const Container_card = ({imagem, titulo, texto, classe}) => {
    return(
        <article className={classe}>
        <img src={imagem} alt="" />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Button nomeBotão="Learn More" />
        </article>
    )
}

export default Container_card;