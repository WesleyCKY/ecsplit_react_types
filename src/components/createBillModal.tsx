import React, { JSX } from "react";
import BillForm from './billForm.tsx'; // Adjust the path as necessary

interface CreateBillModalProps {
    submitCreate: () => void;
    setInputParams: (params: any) => void;
    show: boolean;
}

function validateInput(input: string): boolean {
    return input !== "";
}

function CreateBillModal({submitCreate, setInputParams, show}: CreateBillModalProps): JSX.Element {
  return (
    <div className="modal" style={{ display: "none"}} id="billFormModal">
        <div className="modal-body">
          <BillForm />
        </div>
    </div>
  );
};

export default CreateBillModal;