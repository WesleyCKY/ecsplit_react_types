import React, { useState, useEffect, use } from 'react';
import "../../App.scss";
import "./users.scss";
import UsersController from "./users.js";
import { fetchUsers } from '../../apis/users/usersData.js';


const Users = () => {
    useEffect(() => {
        fetchUsers();
    });

    return (        
        <UsersController />
    );
};

export default Users;