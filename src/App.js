import React, { useEffect } from 'react';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { getUsersData } from './store/actions';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData())
  }, [dispatch])


  return (
    <div className="wrapper">
      <Home />
    </div>
  );
};

export default App;