import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="font-bold mt-[15px] text-2xl underline uppercase">Random {tag} Gifs</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width={450}/>)
      }

      <input 
      className="w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center"
      onChange={(event) => setTag(event.target.value)}
      value={tag}

      />
      
      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]"
      >Generate</button>
    </div>
  )
}

export default Tag;