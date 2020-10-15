import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import Image from './Image';
import Axios from "axios";

export default function Images() {

  const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY"
      ).then((res) => {
      console.log(res);
    }); 
  }, []);

  const [myName, setMyName] = useState('Sarthak')

  useEffect(() => {
    setMyName("Reactjs");
    // console.log('i am use effect 1');
  });

  useLayoutEffect(() => {
    
    // varRef.current = varRef.current + 1;
    // console.log('i am use effect 2');
  });

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages([
      ...images.slice(0, index),
      ...images.slice(index +1, images.length),
    ]);
    console.log("I am changing state");
  }
  
  function ShowImage() {
    return images.map((img, index) => <Image image={img} handleRemove={handleRemove} index={index} key={index} />);
  }

  function handleAdd() {
    setimages([
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
      <p>my name is {myName}</p>
      <h1>{varRef.current} images</h1>
      <p>Component is updated {varRef.current} times</p>
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