import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'

class Users extends Component {
   

 render() {
   
    if(this.props.loading){
        return <Loading/>
    } else{
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.props.users.map(user => (
                        <User user={user} key={user.id} />
                    ))}
                </div>
            </div>
        )

    }
}
}

export default Users

//userslerı coğaltıcaz 
//map methoduyla donguye sokmus olduk
//https request servis uzerinden bilgileri çekmek 