import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: '../../images/pradeep palace/PHOTO-2022-06-30-19-16-54 (2).jpg',
    caption: 'Slide 1'
  },
  {
    url: 'src\\images\\pradeep palace\\PHOTO-2022-06-30-19-16-54 (2).jpg',
    caption: 'Slide 2'
  },
  {
    url: 'src\\images\\pradeep palace\\PHOTO-2022-06-30-19-16-54 (3).jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;