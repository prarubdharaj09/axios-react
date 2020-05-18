import React , { Component } from "react";

class user extends Component{
    render(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            console.log('data drive', response)
            
        })
        return(
            <h1>Data available </h1>
        )
    }
}
export default user;