import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import itemsObjects from "../data/items"
import "./Productpage.css"
const Productpage = (props) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const type = useParams()

    if(type === "wiskey"){
        document.getElementsByTagName("Wijn").namedItem('description').setAttribute('content', 'Add wiskey to card')
    }

    const cardClicked = (event) => {
        if(event){
            setCounter(counter + 1)
            console.log(counter)
        }
    }
    

    console.log('Uit products',props)

    const toBeRendered = props.collection.map(item => {
        return (
            <li key={item.name} className="productpage__listItem">
                <img src={item.image} alt={item.alt} />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button onClick={cardClicked}>Add to card</button>
            </li>
        )
    })

    return (
        <article className="productpage">
            <div className="productPage__counter">{counter}</div>
            <ul className="productpage__list">
                {toBeRendered}
            </ul>
        </article>)
}

export default Productpage