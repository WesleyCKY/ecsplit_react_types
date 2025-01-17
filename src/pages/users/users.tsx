import React, { useState, useEffect } from 'react';
import { createUser, fetchUsers } from '../../apis/users/usersApi.ts';
import { showMessage } from '../../utils/message.js';
import { useTranslation } from 'react-i18next';
import NewUserModal from "../../components/newUserModal.tsx";
import "./users.scss";
import 'bootstrap';
import { Modal } from 'bootstrap';

const UsersController = () => {
  // const {tu} = useTranslation("users");
  interface User {
    id: number;
    name: string;
  }
  
  const [users, setUsers] = useState<User[]>([]);
  const [nameInput, setNameInput] = useState('');
  const [showModal, setShowModal] = useState(false);

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
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/names/delete`, {
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
      const response = await createUser(nameInput);
      const result = await response;

      if (!result.error) {
        console.log(result.message);
        const MyModal = new Modal(document.querySelector("#nameModal"));
        MyModal.hide();
        setShowModal(false);
        showMessage(result.message);
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
    <div id="updateStatus"></div>
    <button type="button" className="btn btn-primary users-button" data-toggle="modal" data-target="#nameModal">
          Add User
        </button>
    <table id="adminTable" className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b-2 px-4 py-2">Name</th>
          <th className="border-b-2 px-4 py-2">Operation</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border-b px-4 py-2">{user.name}</td>
            <td className="border-b px-4 py-2">
              <button className="users-button" onClick={() => confirmDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3 id="updateStatus" className="mt-4"></h3>
    <div className="modal" id="nameModal" tabIndex={-1} role="dialog" aria-labelledby="nameModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header modal-title-theme" style={{ width: '100%' }}>
                    <h2 className="modal-title" id="nameModalLabel">Initial係咩先？</h2>
                    <button type="button" className="close" style={{ width: '20%' }} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body modal-body-theme">
                    <form id="nameForm" onSubmit={(e) => { e.preventDefault(); submitCreate(); }}>
                        <div className="form-group">
                            <label htmlFor="nameInput">Initial或者名字</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="輸入新的initial/name" onChange={(e) => setNameInput(e.target.value)} required />
                        </div>
                    </form>
                </div>
                <div className="modal-footer modal-footer-theme">
                    <button type="button" className="btn btn-secondary " data-dismiss="modal">離開</button>
                    <button type="button" className="btn btn-primary modal-button-confirm" onClick={submitCreate}>添加</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default UsersController;