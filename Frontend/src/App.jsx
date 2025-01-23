import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./pages/Form/Form";
import Signup from "./components/Signup/Signup";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import PersonalProjects from "./pages/PersonalProjects/PersonalProjects";
import Homepage from "./pages/HomePage/Homepage";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      {/* <Navbar setShowSignup={setShowSignup} />
      {showSignup && <Signup />} */}
      {/* <Form /> */}
      {/* <ProjectDetail/> */}
      <PersonalProjects/>
      {/* <Homepage/> */}
    </div>
  );
};

export default App;
