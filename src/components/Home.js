import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./css/home.css"
const Home = () => {
  const slideImages = [
    {
      url: require("../media/slidea.jpg"),
      caption: 'Slide 1'
    },
    {
      url: "../media/slideb.jpg",
      caption: 'Slide 2'
    },
    {
      url: "../media/slidec.jpg",
      caption: 'Slide 3'
    },
  ];

  return (
    <div id="home">
      <div id="slider_container">
        <Slide>
          {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <img alt="product slide" src={slideImage.url} />
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
        </Slide>
      </div>
      <div className='new_products'>
      <hr />
      <h2>Nuevo por aqui</h2>
      <hr />
      </div>
    </div>
  );
};

export default Home;
