import axios from 'axios';
import { promises as fs } from 'fs'; // Using fs promises API for cleaner async/await

// Replace 'API_ENDPOINT' with the actual endpoint of the API you're using
const API_ENDPOINT = 'https://api.api-ninjas.com/v1/exercises';

async function fetchDataAndWriteToFile() {
  try {
    // Fetch data from the API
    const response = await axios.get(API_ENDPOINT,
        {headers: { 
          'X-Api-Key': 'YY+/HA5kVPE7oPBhHTXJVg==f6wwv4BHCpXv8Ywk'}
        });
    const data = response.data;
    console.log(data)
    // Transform data here if necessary
    const formattedData = JSON.stringify(data, null, 2);
    
    // Save to exercise.json
    await fs.writeFile('./data/exercise.json', formattedData);
    console.log('Data saved to exercise.json');
  } catch (error) {
    console.error('Error fetching and writing data:', error);
  }
}

// Run the function
fetchDataAndWriteToFile();
