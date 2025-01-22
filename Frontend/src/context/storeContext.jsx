import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showPersonalPost, setShowPersonalPost] = useState("");

  const url="http://localhost:3000";
  
  // display user personal projects
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

  // delete project
  const deleteProjects = async({postId}) =>{
    try{
     const response = await axios.delete(`${url}/api/post/${postId}`);
     if(response.data.success){
      console.log("post deleted successfully");
     }
    }catch(error){
      console.log(error);
    }
  }

  const contextValue ={
  showPersonalPost,
  showProjects,
  deleteProjects
  }

  return (
    <StoreContext.Provider value={contextValue}>
    {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;