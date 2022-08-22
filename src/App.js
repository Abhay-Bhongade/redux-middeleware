import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {userAction} from "../src/redux/action/userAction"
import './App.css';
import User from './Component/User';

const  App=()=> {

  const dispatch = useDispatch();

  const myState = useSelector((state)=>state.userReducer)
  console.log(myState);
  const {user,loading,error} = myState;
  useEffect(()=>{
     dispatch(userAction());
  },[])

  return (
    <div className="App">
      <h2>User Data</h2>
      {
        loading ?
         ( <h2>Loading......</h2> 
        ) : error ? 
         ( <h2>{error}</h2> ) : ( < User user={user} />
        )
        }
    </div>
  )}

export default App;
