import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../../apis/users/usersData';
import { showMessage } from '../../utils/message';

const UsersController = () => {
  const [users, setUsers] = useState([]);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await fetchUsers().then((usersData) => {
        console.log(usersData);
        setUsers(usersData);
    });
    
    
  };

  const confirmDelete = async (userId) => {
    const userConfirmed = window.confirm('真的要删除此用户嗎?');
    if (userConfirmed) {
      await deleteUser(userId);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/names/delete`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      });
      const result = await response.json();

      if (result) {
        console.log(result.message);
        await loadUsers();
      } else {
        console.error('Error deleting user:', result.statusText);
        showMessage(result.statusText);
        const updateStatus = document.getElementById('updateStatus');
        if (updateStatus) {
          updateStatus.innerText = 'Error deleting user.';
        }
      }
    } catch (error) {
      console.error('Error:', error);
      const updateStatus = document.getElementById('updateStatus');
      if (updateStatus) {
        updateStatus.innerText = 'Error deleting user.';
      }
    }
  };

  const submitCreate = async () => {
    try {
      const response = await fetch(`/names/create`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nameInput }),
      });
      const result = await response.json();

      if (result) {
        console.log(result.message);
        await loadUsers();
      } else {
        console.error('Error creating user:', result.statusText);
        showMessage(result.statusText);
        const updateStatus = document.getElementById('updateStatus');
        if (updateStatus) {
          updateStatus.innerText = 'Error creating user.';
        }
      }
    } catch (error) {
      console.error('Error:', error);
      const updateStatus = document.getElementById('updateStatus');
      if (updateStatus) {
        updateStatus.innerText = 'Error creating user.';
      }
    }
  };

  return (
    <div className="users-container hidden" id="admin">
    
    {/* <div>
      <input
        type="text"
        id="nameInput"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button onClick={submitCreate}>Create User</button>
    </div> */}
    <div id="updateStatus"></div>
    <h1>Users</h1>
    <table id="adminTable" className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b-2 px-4 py-2">姓名</th>
          <th className="border-b-2 px-4 py-2">操作</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border-b px-4 py-2">{user.name}</td>
            <td className="border-b px-4 py-2">
              <button onClick={() => confirmDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3 id="updateStatus" className="mt-4"></h3>
  </div>
  );
};

export default UsersController;