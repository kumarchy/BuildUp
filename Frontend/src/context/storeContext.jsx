import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showPersonalPost, setShowPersonalPost] = useState("");

  const url="http://localhost:3000";

  const showProjects = async() =>{
  try{
    const response = await axios.get(`${url}/api/post`)
    if(response.data.success){
      setShowPersonalPost(response.data.data);
    }
  }catch(error){
    console.log(error);
  }
  }

  const contextValue ={
  showPersonalPost,
  showProjects
  }

  return (
    <StoreContext.Provider value={contextValue}>
    {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;