import React, {useState, useEffect, useRef} from 'react';
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';

export default function Images() {

  const [images, setImages] = useFetchImage();

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    
  }, []);

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index +1, images.length),
    ]);
  }
  
  function ShowImage() {
    return images.map((img, index) => <Image image={img.urls.regular} handleRemove={handleRemove} index={index} key={index} />);
  }

  function handleAdd() {
    setImages([
      newImageUrl,
      ...images,
    ]);
    setnewImageUrl("");
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input 
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-2 border border-gray-800 shadow rounded w-full"
            onChange={handleChange}
            value={newImageUrl}
          />
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}