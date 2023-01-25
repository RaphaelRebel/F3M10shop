import { useState, useEffect } from 'react';
import './App.css';
import FilterBar from './components/FilterBar/FilterBar';
import GalleryCard from './components/GalleryCard/GalleryCard';
import itemsFromDataFile from "./data/items"
function App() {

  const [items, setItems] = useState([])
  const [defaultItems, setDefaultItems] = useState([])

  useEffect(() => {
    let i = 0;
    let types = ["wijn", "wiskey", "bier"]
    
    const galleryCardsToBeRendered = itemsFromDataFile.map(collection => {
      let temp = <GalleryCard type={types[i]} items={collection} />
      i = i + 1;
      return temp
    })
    setItems(galleryCardsToBeRendered)
    setDefaultItems(galleryCardsToBeRendered)
  }, [])

  const onFilter = (typeToBeFiltered) => {
    const cardsToBeRendered = defaultItems.filter(card => {
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

export default App;
