import React from 'react'
import Message from './Messag'
import UsersTable from './UsersTable'
import './MainUser.css'

function Main_user() {
    return (
        <div className="main_user">
            <UsersTable/>
            <Message/>
        </div>
    )
}

export default Main_user
