import './App.css'
import {useCallback, useEffect, useState} from "react";
import {CatsType} from "./types/types.ts";
import Header from "./components/header/Header.tsx";
import FavoritesCats from "./components/favoritesCats/FavoritesCats.tsx";
import AllCats from "./components/allCats/AllCats.tsx";
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";


function App() {
  const [cats,setCats] = useState<Array<CatsType>>([]);
  const [favoritesCats,setFavoritesCats] = useState <Array<string>>([]);
  const setCatsHandler =useCallback( (data:Array<CatsType>)=>{
      setCats(prev=>[...prev, ...data])
  },[])
  useEffect(() => {
      fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10")
          .then(response => response.json())
          .then(data =>setCats(data) )
          .catch(error => console.error(error));
  }, []);

  const addFavoritesCats = useCallback((favorites:boolean,url:string)=>{
      if(!favorites){
          setFavoritesCats(prev=>[...prev, url])
      }else{
          setFavoritesCats(prev=>prev.filter((el)=> el != url))
      }
  },[])

  return (
    <>
        <Header/>
        <Box>
            <Routes>
                <Route path={'/*'} element={<AllCats setCats={setCatsHandler} cats={cats} addFavoritesCats={addFavoritesCats} favoritesCats={favoritesCats}/>}/>
                <Route path={'/fav'}  element={<FavoritesCats favoritesCats={favoritesCats} addFavoritesCats={addFavoritesCats}/>}/>
            </Routes>
        </Box>
    </>
  )
}

export default App
