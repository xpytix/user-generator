import "./App.css"
import React from 'react';


function User(props) {
    const users = props.users.map(user => {
        return <li key={user.login.uuid}>
                <img alt={"user-img"} onClick={()=>{
                    let text = `Name : ${user.name.first} ${user.name.last} 
                    Age: ${user.dob.age} Phone: ${user.phone} E-mail: ${user.email} 
                    Login: ${user.login.username} Password: ${user.login.password}`;

                    var elem = document.createElement("textarea");
                    document.body.appendChild(elem);
                    elem.value = text;
                    elem.select();
                    document.execCommand("copy");
                    document.body.removeChild(elem);
                    alert("Copied user")

                }}  title={"Copy All"} src={user.picture.large}/>
                <div className="user-data">
                    <p aria-label="Click to copy" data-balloon-pos="right"  id="name" onClick={props.copyClick}>Name : {user.name.first} {user.name.last}</p>
                    <p aria-label="Click to copy" data-balloon-pos="right"  id="age" onClick={props.copyClick}>Age: {user.dob.age}</p>
                    <p aria-label="Click to copy" data-balloon-pos="right"  id="phone" onClick={props.copyClick}>Phone: {user.phone}</p>
                    <p aria-label="Click to copy" data-balloon-pos="right"  id="e-mail" onClick={props.copyClick}>E-mail: {user.email}</p>
                    <p aria-label="Click to copy" data-balloon-pos="right"  id="login" onClick={props.copyClick}>Login: {user.login.username}</p>
                    <p aria-label="Click to copy" data-balloon-pos="right"  id="password" onClick={props.copyClick}>Password: {user.login.password}</p>
                </div>
            </li>
    })
    return(
        <ul className="box">
            {users}
        </ul>

    )

}

export default User
