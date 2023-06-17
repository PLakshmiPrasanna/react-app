import React from "react";

let movieTitle  = "some name";
let imageUrl = "https://occ-0-1480-1479.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55";
let description ="some description";

let data = [
  { movieTitle: "some name 1", 
    imageUrl : "https://occ-0-1480-1479.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
    description: "some description 1"
  },
  { movieTitle: "some name2", 
  imageUrl : "https://occ-0-1480-1479.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
  description: "some description 2"
  },

  { movieTitle: "some name3", 
  imageUrl : "https://occ-0-1480-1479.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
  description: "some description 3"
  }
];

const App = () =>{
  return (
    <section>
      {/* <Movie movieData= {data[0]}></Movie>
      <Movie movieData={data[1]}></Movie>
      <Movie movieData={data[2]}></Movie> */
      data.map((obj, index) => {
        console.log(obj);
        return <Movie imageUrl={ obj.imageUrl}  description={obj.description} movieTitle={obj.movieTitle}  />
    })
      
      }
    </section>
  );
}

const Movie = (props) => {
  console.log(props);
  const {imageUrl, description, movieTitle} = props;
  return (
    <article>
       {
       /* <img src={props.movieData.imageUrl} alt = 'image 1'></img>
      <p>{props.movieData.description}</p>
      <h3>{props.movieData.movieTitle}</h3> */
      <>
      <img src={props.imageUrl}/>
      <p> {props.description} </p>
      <h3> {props.movieTitle}  {movieTitle} </h3>
      </>
      
      }
    </article>
  );
}

function getData(userObj){
  const {lastName, firstName} = userObj;
  console.log(firstName, lastName);

}

getData({ firstName: 'emma', lastName:'watson'})


export default App;
