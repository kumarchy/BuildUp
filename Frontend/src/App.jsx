import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Signup from "./components/Signup/Signup";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar setShowSignup={setShowSignup} />
      {showSignup && <Signup />}
      <Form />
    </div>
  );
};

export default App;
