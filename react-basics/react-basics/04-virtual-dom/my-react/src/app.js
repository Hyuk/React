import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
    // states are immutable
  }
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={()=> (this.setState({isShowing: !this.state.isShowing}))}>Toggle Image</button>
          </div>
          {
            this.state.isShowing ? (
              <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              ) : null
          }
        </div>
      </section>
    );
  }
}

export default App;