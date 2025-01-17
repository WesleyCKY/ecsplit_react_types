

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
        document.getElementById('updateStatus').innerText = 'Error loading users.';
    }
}

export {fetchUsers};