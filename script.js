const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const API_KEY = '8bqNEZDiAgT0LlVoxgIfPQ==FEXYzBRn56YxDpTx';

// Function to fetch a joke from the API
async function fetchJoke() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
            headers: {
                'X-Api-Key': API_KEY
            }
        });
        const data = await response.json();
        return data[0].joke; // Assuming the response is an array of jokes, so accessing the first one
    } catch (error) {
        console.error('Error fetching joke:', error);
        throw new Error('Failed to fetch joke');
    }
}

// Function to display the fetched joke
async function displayJoke() {
    loading.style.display = 'flex'; // Show loading animation
    jokeText.style.display = 'none'; // Hide joke text
    errorMessage.style.display = 'none'; // Hide error message

    try {
        const joke = await fetchJoke();
        jokeText.textContent = joke;
        jokeText.style.display = 'block'; // Show joke text
    } catch (error) {
        errorMessage.style.display = 'block'; // Show error message
    } finally {
        loading.style.display = 'none'; // Hide loading animation
    }
}

// Event listener for the joke button
jokeButton.addEventListener('click', displayJoke);
