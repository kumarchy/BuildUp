import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showPersonalPost, setShowPersonalPost] = useState([]);
  const [showAllPost, setShowAllPost] = useState("");
  const [likesCount, setLikesCount] = useState({});
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState([]);

  const url = "http://localhost:3000";

  const user = JSON.parse(localStorage.getItem("user"));

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

        response.data.data.forEach((post)=>getLikeCount(post.id));
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

   // search project
  const searchPost = async(searchTerm)=>{
   try{
    const response =await axios.get(`${url}/api/post/search`,{
      params:{search : searchTerm}
     })

     if(Array.isArray(response.data.data)){
      setShowAllPost(response.data.data);
     }
   }catch (error) {
    console.error("Error fetching search results:", error);
   }
  }
  // create comment
  const handleCommentSubmit = async (e,post_id) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      post_id: post_id,
      user_id: user.id,
      comment: comment,
    };

    try {
      const response = await axios.post(
        `${url}/api/comment`,
        newComment
      );
      if (response.data.success) {
        setComment("");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  // get comment
  const getComment = async(post_id)=>{
    try{
      const response = await axios.get(`${url}/api/comment/${post_id}`)
    if(Array.isArray(response.data.data)){
      setShowComment(response.data.data);
    }
    }catch(error){
      console.log(error);
    }
  }

  // create like
  const createLike = async(post_id,type)=>{
    try{
      const response = await axios.post(`${url}/api/like`,
        {
          post_id,
          type,
          user_id: user.id
        }
      );
      if(response.data.success){
        console.log(`${type} added successfully`);
      getLikeCount(post_id);
      }
    }catch(error){
      console.log("Error creating like",error);
    }
  }

  const getLikeCount = async (postId) => {
    try {
      const response = await axios.get(`${url}/api/like/${postId}`);
      if (response.data.success) {
        setLikesCount((prev) => ({
          ...prev,
          [postId]: {
            likes: response.data.likes,
            dislikes: response.data.dislikes,
          },
        }));
      }
    } catch (error) {
      console.log("Error getting like count", error);
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
    searchPost,
    getDaysAgo,
    handleCommentSubmit,
    comment,
    setComment,
    getComment,
    showComment,
    createLike,
    getLikeCount,
    likesCount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
