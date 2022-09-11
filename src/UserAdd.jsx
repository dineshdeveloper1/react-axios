import React from 'react';
import axios from 'axios'

class UserAdd extends React.Component {
    state = {
        name: []
    }

    handleChanges = event => {
        this.setState({ name: event.target.value })
    }

    submitData = event => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(result => {
                console.log(result.data)
                alert('Added Success!!!!')
            })
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitData}>
                    <label>
                        User Name : <input type="text" name="name" onChange={this.handleChanges} />
                    </label>
                    <button type='submit'>Add User</button>
                </form>

                <hr />
            </>
        )
    }
}


export default UserAdd