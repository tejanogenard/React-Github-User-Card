// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

import React from 'react';
import axios from 'axios';

class App extends React.Component{
    state = {
        users: [],
        userText: ''
    }


    componentDidMount() {
        axios
            .get(`https://api.github.com/users/tejanogenard`)
            .then(res => {
                  console.log(res)
                // setState with the incoming data 
                this.setState({
                    //  users: res.data.....
                    users: res.data
                })
            })
            .catch(err => console.log(err.message))
    }
    

    render(){
        return(
            <div className = "App">
                <h1>Github Friends</h1>
            </div>
        )
    }
}
export default App
