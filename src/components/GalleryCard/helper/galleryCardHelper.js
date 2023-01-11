import items from "../../../data/items"


//Helper dat de foto's laad per grid
let iterator = 1
let classToBeAdded = ""

let toBeRenderedFigures = items.wijn.map(wijns => {

         switch (iterator) {
                  case 1:
                           classToBeAdded = "galleryCard__figure galleryCard__figure--big";
                           break
                  case 2:
                           classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
                           break
                  case 3:
                           classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
                           break
                  default:
                           classToBeAdded = "galleryCard__figure galleyCard__figure--small"
                           break
         }

         iterator += 1;

         return (
                  <figure className={classToBeAdded}>
                           <img className="galleryCard__img" src={wijns.image} alt={wijns.alt} />
                  </figure>
         )
})

export default toBeRenderedFigures