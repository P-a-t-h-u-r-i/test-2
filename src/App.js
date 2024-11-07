import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Pathuri' }
  }

  handleClick( Name ) {

    this.setState({ name: Name })

  }

render() {
 
      return (
        <div>
          <h1>Hello, { this.state.name }</h1>
          <button onClick={() => { this.handleClick( 'Sai' ) }} >Sai</button>
          <button onClick={() => { this.handleClick( 'Manikanta' ) }} >Manikanta</button>
        </div>
      );
    }
}

export default App