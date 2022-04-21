
const Photo = ({image}) => {
  return (
    <div className="box_photo">
      <div className="box_photo_content">
        <img src={image}/>
      </div>
    </div>
  );
}

export default Photo;