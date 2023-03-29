import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeLastName, changeName } from "./Redux/userSlice";

import Contacts from "./Contacts";
function App() {

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(changeName("MAHA"));
  };
  const handlechangeLatName = () => {
    dispatch(changeLastName("XXXX"));
  };
 
 

  return (
    <div className="App">
     
        <button onClick={() => handleclick()}>Change Name </button>
        <button onClick={() => handlechangeLatName()}>Change lastName </button>
        <input
          placeholder="set our Name"
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
        {user.name}
        {user.lastName}
        <Contacts/>
      
    </div>
  );
}

export default App;
