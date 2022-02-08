import React, { useEffect } from 'react';
import Home from './pages/Home';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersData } from './store/actions';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData())
  }, [])


  return (
    <div className="wrapper">
      <Home />
    </div>
  );
};

export default App;