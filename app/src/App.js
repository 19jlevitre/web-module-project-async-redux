import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getJoke } from './actions/actions'

function App(props) {
  const { dog, isFetching, error, getJoke } = props;
  
  useEffect(()=> {
    props.getJoke();
  }, [])

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching...get it?  a dog for ya bad self!</h2>;
  }


  const handleClick = ()=> {
    props.getJoke();
    
  };
  
  
  return (
    <div className="App">
      <h1>Woof.....?</h1>
      <div className="dog-card">
        <h2>Drum Roll please.....</h2>
        <img  width='50%' height='50%' src={dog.url} alt='Guess we couldnt find it, try again'/>
        <button onClick={handleClick}>Find a Doggo</button>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    dog: state.dog,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(mapStateToProps, { getJoke })(App);
