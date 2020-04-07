
import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from "@material-ui/core/CardMedia"
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors';

import './App.css';
 
const useStyles = makeStyles({
    root:{
        maxWidth: 345,
        backgroundColor: red[500]
    },
    media:{
        height:0,
        paddingTop: '56.24%',
    },
})




class App extends React.Component{
    constructor(){
    super()
    this.state = {
        users: []
    }
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
                <Card className = "git-friends">
                    {this.state.users.map(user => {
                        console.log(user)
                    return (
                        <div>

                            <img  width="200" src={user.avatar_url} key={user.id} alt={user}/>
                    <Typography >Username: {user.login}</Typography>
                    <Typography>followers: {user.followers_url.length}</Typography>
                        </div>
                    )})}

                </Card>
            </div>
        )
    }
}
export default App
