import React from 'react';
import ReactDOM from 'react-dom';

class AppRoutes extends React.Component {


  componentDidMount() {

    // document.addEventListener('contextmenu', (e) => {
    //   e.preventDefault();
    // });

  };

  render() {
    return (
      <div>hello world!</div>
    )
  }
}

ReactDOM.render(
  <AppRoutes />,
  document.getElementById('main')
);