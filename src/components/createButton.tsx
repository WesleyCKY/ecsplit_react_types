import React from "react";

interface CreateButtonProps {
    text: string;
    modalName: string;
}

const CreateButton: React.FC<CreateButtonProps> = ({ text, modalName }) => {
    function showCreateBillForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        // Logic to show the create bill form modal
        const modal = document.getElementById(modalName);
        if (modal) {
            modal.style.display = 'block';
        }
    }
    return (
        <button type="button" className="btn btn-primary create-button" data-toggle="modal" data-target={"#"+modalName} onClick={showCreateBillForm}>
          {text}
        </button>
    );
};

export default CreateButton;

