import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


// const MainMenu = () => {
//   return (
//     <div>
//       <Link to="/gallery/">
//         <button>Studio</button>
//       </Link>
//       <Link to="/gallery/baby">
//         <button>Oferta</button>
//       </Link>
//       <Link to="/gallery/wedding">
//         <button>Galeria</button>
//       </Link>
//     </div>
//   );
// };

class StudioGallery extends React.Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <MainMenu />
      //   </div>
      // </Router>
      <div>Studio Galeria działa</div>
    );
  }
}

export default StudioGallery;
