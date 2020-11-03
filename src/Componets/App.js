
import "./App.css"
import React from 'react';
import User from "./User";
import ButtonFechUser from "./ButtonFetchUser";

const API = "https://randomuser.me/api/?results=1";
class App extends React.Component{

    state={
        users: []
    }
    componentDidMount() {
        this.handleDataFetch();
    }

    handleDataFetch=()=>{
        fetch(API)
            .then(response => {
                if(response.ok)
                {
                    return response;
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data =>{
                const user = data.results;
                this.setState({
                    users: user
                })
            })
            .catch(error => console.log(error + "cos nie tak"))
    }
    copyClick=(e)=>{
        let id = e.target.id

        let text = document.getElementById(id).innerHTML
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    }

    render() {
        const users = this.state.users;
        return (

         <div className="App">
             <User copyClick={this.copyClick} users={users}/>
             <ButtonFechUser click = {this.handleDataFetch}/>
         </div>
        );
    }


}

export default App;
