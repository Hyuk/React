console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
   title: 'Indecision App',
   subtitle: 'Put your life in the hands of a computer',
   options: [],
};

const onFormSubmit = (e) => {
   e.preventDefault();
   
   const option = e.target.elements.option.value;

   if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
   }
};

const template = (
   <div>
      <h1>{app.title}</h1>
      {/* <p>{app.subtitle}</p> */}
      {app.subtitle && <p>{app.subtitle}</p>}
      {/* {options.length > 0 ? <p>Here are your options</p> : <p>No options</p>} */}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
         <li>Item one</li>
         <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
         <input type="text" name="option"/>
         <button>Add Option</button>
      </form>
   </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

// Create render function that renders the new jsx
// Call it right away
// Call it after options array added to