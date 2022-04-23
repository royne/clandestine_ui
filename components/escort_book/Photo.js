
const Photo = ({image, setChangeGrid}) => {
  return (
    <div className="box_photo" onClick={() => setChangeGrid(true)}>
      <div className="box_photo_content">
        <img src={image}/>
      </div>
    </div>
  );
}

export default Photo;