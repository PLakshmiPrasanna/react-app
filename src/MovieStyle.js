import React from "react";

const App= ()=>{
  return (
    <section className ="movie-container">
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
  </section>
  );
};

const Movie=()=>{
  return (
    <article class="each-movie">
      <ImageComponent/> 
      <TitleComponent />
    </article>
  );
};

const ImageComponent = () => {
  return (
    <img src="https://occ-0-1480-1479.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="image 1 "></img>
  );
}



const TitleComponent = ()=>{
  const styles = {
    heading : {
      color : 'blue',
      fontSize: '20px'
    }
  }
  return (
    <>
      <h3 style={{ color: 'red' }}> 
        Movie name 1 - inline css style for h3  
      </h3>
      <span style={ styles.heading}> 
        Small Heading - internal css style for span 
      </span>
      <p> paragaraph - external css style for p </p>
    </>
  );
}
export default App;