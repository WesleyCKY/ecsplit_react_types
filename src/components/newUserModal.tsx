import React from 'react';
import MessageBox from './message.tsx';

interface NewUserModalProps {
    submitCreate: () => void;
    setNameInput: (name: string) => void;
}

function NewUserModal({submitCreate, setNameInput}: NewUserModalProps) {
    return (
        <div className="modal fade" id="nameModal" tabIndex={-1} role="dialog" aria-labelledby="nameModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ width: '100%' }}>
                        <h2 className="modal-title" id="nameModalLabel">Initial係咩先？</h2>
                        <button type="button" className="close" style={{ width: '20%' }} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="nameForm" onSubmit={(e) => { e.preventDefault(); submitCreate(); }}>
                            <div className="form-group">
                                <label htmlFor="nameInput">Initial或者名字</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="輸入新的initial/name" onChange={(e) => setNameInput(e.target.value)} required />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">離開</button>
                        <button type="button" className="btn btn-primary" onClick={submitCreate}>添加</button>
                    </div>
                </div>
            </div>
            <MessageBox message="User created successfully!" type="success" />
        </div>
    );
};

export default NewUserModal;