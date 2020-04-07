
import React from 'react';
import axios from 'axios';
import './App.css';
 

class App extends React.Component{
    state = {
        users: [],
        userText: ''
    }


    componentDidMount() {
        axios
            .get(`https://api.github.com/users/tejanogenard/followers`)
            .then(res => {
                  console.log(res.data)
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
                <div className = "git-friends">
                    {this.state.users.map(user => {
                        console.log(user)
                    return (
                        <div>
                            <img width="200" src={user.avatar_url} key={user.id} alt={user}/>
                    <p>Username: {user.login}</p>
                    <p>followers: {user.followers_url.length}</p>
                        </div>
                    )})}

                </div>
            </div>
        )
    }
}
export default App
