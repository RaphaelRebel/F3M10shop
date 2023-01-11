import "./GalleryCard.css"
import toBeRenderedFigures from "./helper/galleryCardHelper"


const GalleryCard = () => {



         return (
                  <article className="galleryCard">
                           {toBeRenderedFigures}
                  </article>
         )
}

export default GalleryCard