import { showMessage } from "../../utils/message";


async function fetchUsers() {
    try {
        console.log('Base URL .env : ',process.env.REACT_APP_BASE_URL)
        const result = await fetch(process.env.REACT_APP_BASE_URL+ "/names")  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error));
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        showMessage( 'Error fetching users.', 'error' );
    }
}

async function createUser(nameInput: string) {
    try {
        const result = await fetch(`${process.env.REACT_APP_BASE_URL}/names/create`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nameInput }),
          });
        return result.json();
    } catch (error) {
        console.error('Error creating user:', error);
        showMessage( `Error creating user ${nameInput}`, 'error' );
    }
    
}

export {fetchUsers, createUser};