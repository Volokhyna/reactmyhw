import React, {Component} from 'react';
import {usersWithAddress} from "../users1";

class UserComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                <div>{item.name} - {item.status.toString()} - {item.id} - {item.city} - {item.street} - {item.number} </div>
            </div>
        )
    }
}

export default UserComponent;