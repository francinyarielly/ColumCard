import Container_card from "../Conatiner_card/Container_card"
import iconeSedan from "../../../images/icon-sedans.svg"
import IconeSuvs from "../../../images/icon-suvs.svg"
import iconeLuxury from "../../../images/icon-luxury.svg"
import "./App.css"

const App = () => {
    return(
        <section>

        <Container_card
        imagem={iconeSedan}
        titulo="SEDANS"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt error reiciendis pariatur nostrum architecto repudiandae totam, tempore ea ut deserunt eos assumenda fugit consequatur at adipisci dolorem ex voluptatem."
        classe="sedan"
        />

        <Container_card
        imagem={IconeSuvs}
        titulo="SUVS"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt error reiciendis pariatur nostrum architecto repudiandae totam, tempore ea ut deserunt eos assumenda fugit consequatur at adipisci dolorem ex voluptatem."
        classe="suv"
        />

       <Container_card
        imagem={iconeLuxury}
        titulo="LUXURY"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt error reiciendis pariatur nostrum architecto repudiandae totam, tempore ea ut deserunt eos assumenda fugit consequatur at adipisci dolorem ex voluptatem."
        classe="luxury"
        />

        </section>
    )
}

export default App;