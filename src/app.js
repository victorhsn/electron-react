import React from 'react';
import ReactDOM from 'react-dom';

class AppElectron extends React.Component {

  render() {

    return(
      <div className='welcome-msg'>
        Hi! Electron + ReactJS
      </div>
    );
  }
}

ReactDOM.render(
  <AppElectron/>,
  document.getElementById('content')
);
