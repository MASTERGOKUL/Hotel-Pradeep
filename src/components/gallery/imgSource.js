// all teh photos of the image of the gallery source
import ImageSlider from "./slider/imageSlider.js";
const ImageSource = ({slides}) => {

  const containerStyles = {
    width: "1000px",
    height: "580px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ImageSource;