import React, {Component} from 'react';
import {users, usersWithAddress} from "./users1";
import UserComponent from "./user/UserComponent";

class App extends Component {
    render() {
        return (
            <div>
                {
                    usersWithAddress.map(user => (<UserComponent item = {user}/>))
                }
            </div>
        );
    }
}

export default App;