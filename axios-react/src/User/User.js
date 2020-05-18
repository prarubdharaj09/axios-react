import React , { Component } from "react";
import axios from 'axios';

class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            imageUrl:""
        }
    }
    
    componentDidMount(){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response =>{
            this.setState({ imageUrl:response.data.message })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const { imageUrl } = this.state;

        return (
            <img src={imageUrl} alt="dog" />
        )
    }
}
export default User;