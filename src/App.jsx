import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginSignup from "./components/LoginSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-gradient-to-b from-purple-600 to-blue-600">
      <LoginSignup />
    </div>
  );
}

export default App;
