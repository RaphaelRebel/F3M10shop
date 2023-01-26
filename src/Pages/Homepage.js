
import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import GalleryCard from '../components/GalleryCard/GalleryCard';
import itemsFromDataFile from "../data/items"
import { Link } from 'react-router-dom';
const HomePage = (props) => {

  const [items, setItems] = useState([])
  const [defaultItems, setDefaultItems] = useState([])

 const onGalleryCardClicked = (collection) => {
    props.onGalleryCardClicked(collection)
  }

  useEffect(() => {
    let i = 0;
    let types = ["wijn", "wiskey", "bier"]
    
    const galleryCardsToBeRendered = itemsFromDataFile.map(collection => {
      let temp = 
      <Link onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
      <GalleryCard key={types[i]} type={types[i]} items={collection} />
      </Link>
      i = i + 1;
      return temp
    })
    setItems(galleryCardsToBeRendered)
    setDefaultItems(galleryCardsToBeRendered)
  }, [])

  const onFilter = (typeToBeFiltered) => {
    const copy = [...defaultItems]
    const cardsToBeRendered = copy.filter(card => {
      if(card.props.type === typeToBeFiltered){
        return card
      }
    })

    

    setItems(cardsToBeRendered)
  }


  return (
    <>    
   <FilterBar onFilter={onFilter}/>
    {/* <GalleryCard items={items.wiskey} />
   <GalleryCard items={items.wijn}/>
   <GalleryCard items={items.bier}/> */}
   {items}
   </>

  );
}

export default HomePage;
