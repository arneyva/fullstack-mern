import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const UserList = () => {
    const [users, setUsers] = useState([])

    // useEffect
    useEffect(() => {
        getUsers()
    }, [])

    // ambil semua data users
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
       
    }
    return (
        <div className="coloumns">
            <Link to={'/create'} className="button is-primary mt-5">Create New User</Link> 
            <div className="coloumn is-half">
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                             <tr key={user._id}>
                             <td>{index + 1}</td>
                             <td>{user.name}</td>
                             <td>{user.email}</td>
                             <td>{user.gender}</td>
                             <td>
                                <Link to={`/update/${user._id}`} className='button is-small is-info mr-2'>Update</Link>
                                <button onClick={() => deleteUser(user._id)} className='button is-small is-danger'>Delete</button>
                             </td>
                         </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList