import Image from "next/image";

const Photo = ({image, setChangeGrid}) => {
  return (
    <div className="box_photo" onClick={() => setChangeGrid(true)}>
      <div className="box_photo_content">
        <Image src={image} layout={"fill"}/>
      </div>
    </div>
  );
}

export default Photo;