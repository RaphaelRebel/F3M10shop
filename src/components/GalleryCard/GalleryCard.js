import "./GalleryCard.css"
import getToBeRenderedFigures from "./helper/galleryCardHelper"


const GalleryCard = (props) => {



         return (
                  <article className="galleryCard">
                           {getToBeRenderedFigures(props.items)}
                  </article>
         )
}

export default GalleryCard