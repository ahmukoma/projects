import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function changeSlide(forward = true) {
    setCurrCardIdx(forward ? currCardIdx + 1 : currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx >= 1 && <i
          className="bi bi-arrow-left-circle"
          onClick={() => changeSlide(false)}
          />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
          />
        {currCardIdx < 2 &&<i
          className="bi bi-arrow-right-circle"
          onClick={changeSlide}
        />}
      </div>
    </div>
  );
}

export default Carousel;
