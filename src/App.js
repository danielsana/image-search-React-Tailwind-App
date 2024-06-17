import './App.css';
import Jumbotron from './components/Jumbotron';
import SearchFile from "./components/SearchFile";
import Images from './components/Images';
import UserAxios from './Hooks/UserAxios';
import { createContext } from 'react';

// create context
export const ImageContext = createContext();

function App() {
  const {response,isLoading,error,fetchData } = UserAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
  
  const value = {
    response,
    isLoading,
    error,
    fetchData

  }

  return (
   <ImageContext.Provider value={value}>
   <Jumbotron>
    <SearchFile />
   </Jumbotron>
   <Images/>
   </ImageContext.Provider>
  );
}

export default App;
