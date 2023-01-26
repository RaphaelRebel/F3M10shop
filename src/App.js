
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage';
import ProductPage from './Pages/Productpage';

function App(props) {

const [collectionForProductPage, setCollectionForProductPage] = useState([])
 const onGalleryCardClicked = (collection) => {
  setCollectionForProductPage(collection)
 }

  return (
    <>    
 <Routes>
  <Route path='/' element={<HomePage onGalleryCardClicked={onGalleryCardClicked}/>} />
  <Route path='/product/:item' element={<ProductPage collection={collectionForProductPage}/>} />
 </Routes>
 
   </>

  );
}

export default App;
