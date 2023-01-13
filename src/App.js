import './App.css';
import FilterBar from './components/FilterBar/FilterBar';
import GalleryCard from './components/GalleryCard/GalleryCard';
import items from "./data/items"
function App() {

  console.log(items)
  return (
    <>    
    <GalleryCard items={items.wiskey} />
   <GalleryCard items={items.wijn}/>
   <GalleryCard items={items.bier}/>
   <FilterBar />
   </>

  );
}

export default App;
