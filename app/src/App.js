import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getJoke } from './actions/actions'
import styled from 'styled-components';

function App(props) {
  const { dog, isFetching, error, getJoke } = props;
  const Body =styled.div`
   display: flex;
   flex-direction:column;
  
   


   button{
     width: 20%;
     height: 5vh;
     position: static;
     margin-bottom: 5%;
   }
   img{
     margin-bottom:10%;
     border: 2px black solid;
     border-radius: 5%;
   }

   h1{
     color: white;
   }
   
   h2{
     color: white;
   }
   
  `
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
    <Body className="App">
      <h1>Woof.....?</h1>
      <div className="dog-card">
        <h2>Drum Roll please.....</h2>
        <button onClick={handleClick}>Find a Doggo</button>
        <img  width='90%' height='800px' src={dog.url} alt='Guess we couldnt find it, try again'/>
        
        
      </div>
    </Body>
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
