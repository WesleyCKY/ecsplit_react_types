

async function fetchUsers() {
    try {
        const result = await fetch('http://localhost:3010/names')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error));
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        document.getElementById('updateStatus').innerText = 'Error loading users.';
    }
}

export {fetchUsers};