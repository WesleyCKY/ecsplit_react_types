import React, { useState, useEffect } from 'react';
import CreateButton from '../../components/createButton.tsx';
import CreateBillModal from '../../components/createBillModal.tsx';
const Bills = () => {

    return (
        <div className="settings-container">
            {/* create bills button */}
            <CreateButton text="Create Bill" modalName='billFormModal'/>
            <CreateBillModal submitCreate={function (): void {
                throw new Error('Function not implemented.');
            } } setInputParams={function (params: any): void {
                throw new Error('Function not implemented.');
            } } show={false} /> 
            {/* Bills record table */}
        </div>
    );
};

export default Bills;