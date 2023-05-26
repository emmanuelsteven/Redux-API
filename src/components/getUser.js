import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../redux/userStore/userslice';


const GetUser = () => {
    const { users, isLoading, error } = useSelector(state => state.user)
    const dispatch  = useDispatch();
    useEffect(() =>{
        dispatch(getUser())
    },[])

  return (
    <div>
        {isLoading && <p>loading...</p>}
        {error && <p>{error}</p>}
        <ul>
            {users.map(user => (
                <li key={user.last}>{user.first} {user.last}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetUser;