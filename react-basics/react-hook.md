# React Hook

### useEffect for mount event - mouse focus on inputBox
```javascript
import React, {useState, useEffect} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  useEffect(() => {
    const inputBox = document.getElementById('inputBox');
    inputBox.focus();
  }, [])

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
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
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input 
            type="text"
            id="inputBox"
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
```

### useRef Hook to focus the curser on the inputBox
```javascript
import React, {useState, useEffect} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
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
```

### Display how many images are there
* Use another useRef to store the array.length
```javascript
import React, {useState, useEffect, useRef} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
    console.log(varRef);
  }, [])

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
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
      <h1>{varRef.current} images</h1>
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
```

* However, there is an issue that whenever the user add / remove picture the number doesn't change.

* We need to update Hook 
```javascript
import React, {useState, useEffect, useRef} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    varRef.current = images.length;
  });

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
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
      {console.log('i am jsx')}
      <h1>{varRef.current} images</h1>
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
```

* When an image is removed, nothing has been changed.

* When additional image is remove, the count is reduced by one.

* Display How many times the component is updated.

```javascript
import React, {useState, useEffect, useRef} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [updateCount, setUpdateCount] = useState(0);
  useEffect(() => {
    setUpdateCount(updateCount + 1);
  });

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
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
      {console.log('i am jsx')}
      <h1>{varRef.current} images</h1>
      <p>Component is updated {updateCount} times</p>
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
```

* However the count keep increassing since the value keep update trigger the update hook

* let's use varRef instead.

```javascript
import React, {useState, useEffect, useRef} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

   useEffect(() => {
    varRef.current = varRef.current + 1;
  });

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
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
      {console.log('i am jsx')}
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
```

* However, the count starts 4 and whenever user update adding or remove a photo, it increase the counter

* we need to check the difference between the useEffect and useLayoutEffect
```javascript
import React, {useState, useEffect, useRef} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
    console.log('i am use effect 1');
  });

  useEffect(() => {
    varRef.current = varRef.current + 1;
    console.log('i am use effect 2');
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
      {console.log('i am jsx')}
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
```

* we need to useLayoutEffect Hook - it fires synchronously after all DOM mutations.
* useLayoutEffect will be called before the useEffect
```javascript
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
    console.log('i am use effect 1');
  });

  useLayoutEffect(() => {
    varRef.current = varRef.current + 1;
    console.log('i am use effect 2');
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
      {console.log('i am jsx')}
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
```