import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showPersonalPost, setShowPersonalPost] = useState([]);
  const [showAllPost, setShowAllPost] = useState("");

  const url = "http://localhost:3000";

  // Display user personal projects

  const showProjects = async (userId) => {
    try {
      const response = await axios.get(`${url}/api/post/${userId}`);
      if (Array.isArray(response.data.data)) {
        setShowPersonalPost(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Display all projects projects

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

  const getDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDiff = currentDate - createdDate;
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "1 day ago";
    return `${daysAgo} days ago`;
  };

  const contextValue = {
    showPersonalPost,
    showProjects,
    deleteProjects,
    showAllPost,
    fetchAllPosts,
    getDaysAgo
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
