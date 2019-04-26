import React, { Component } from 'react';
import MainMenu from "containers/MainMenu";
import { MDBContainer } from "mdbreact";

class App extends Component {

  render() {
    const container = { height: 1300 }
    return (
      <>
        <MainMenu/>
        <MDBContainer style={container} className="text-center mt-5 pt-5">
          <div>
            Hello
            world
          </div>
        </MDBContainer>
      </>
    );
  }
}

export default App;
