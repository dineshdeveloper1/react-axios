import React from 'react';
import axios from 'axios'

class UserList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                const users = result.data
                this.setState({ users })
            })
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.users.map(user =>
                            <li key={user.id}>{user.id}. {user.name} - {user.email} </li>
                        )
                    }
                </ul>
            </>
        )
    }
}


export default UserList