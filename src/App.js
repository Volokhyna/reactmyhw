import React, {Component} from 'react';
import {usersWithAddress} from "./users1";
import UserComponent from "./user/UserComponent";

class App extends Component {
    render() {
        return (
            <div>
                {
                    usersWithAddress.map((user, index) => {
                        let clsX = user.id%2 ? 'even' : 'odd';
                        return (
                            <UserComponent
                                item={user}
                                cls={clsX}
                                key={index}/>);
                    })
                }
            </div>
        );
    }
}

export default App;