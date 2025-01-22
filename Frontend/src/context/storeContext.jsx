import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showPersonalPost, setShowPersonalPost] = useState("");
  const [showAllPost, setShowAllPost] = useState("");

  const url = "http://localhost:3000";

  // Display user personal projects

  const showProjects = async () => {
    try {
      const response = await axios.get(`${url}/api/post`);
      if (response.data.success) {
        setShowPersonalPost(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const response = await axios.get(`${url}/api/post`);
      if (response.data.success) {
        setShowAllPost(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete project
  const deleteProjects = async (postId) => {
    try {
      const response = await axios.delete(`${url}/api/post/${postId}`);
      if (response.data.success) {
        console.log("Post deleted successfully");
        // Optionally refresh projects after deletion
        showProjects();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    showPersonalPost,
    showProjects,
    deleteProjects,
    showAllPost,
    fetchAllPosts,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
