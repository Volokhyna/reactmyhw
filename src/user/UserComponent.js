import React, {Component} from 'react';
import './Userstyle.css';

class UserComponent extends Component {
    render() {
        let {item, cls} = this.props
        return (
            <div>
                <div className={cls}> {item.name} - {item.status.toString()} - {item.id} - {item.city} - {item.street} - {item.number} </div>
            </div>
        )
    }
}

export default UserComponent;