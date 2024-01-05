import axios from 'axios';
import { promises as fs } from 'fs'; // Using fs promises API for cleaner async/await

const exercises = ['abdominals',
  'abductors',
  'adductors',
  'biceps',
  'calves',
  'chest',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'lower_back',
  'middle_back',
  'neck',
  'quadriceps',
  'traps',
  'triceps']
  
  
  // Replace 'API_ENDPOINT' with the actual endpoint of the API you're using
// const API_ENDPOINT = `https://api.api-ninjas.com/v1/exercises;
  
async function fetchDataAndWriteToFile() {
  let allExercisesData = [];

  for(let i = 0; i < exercises.length; i++){
    try {
      // Fetch data from the API
    const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${exercises[i]}`,
        {headers: { 
          'X-Api-Key': 'YY+/HA5kVPE7oPBhHTXJVg==f6wwv4BHCpXv8Ywk'}
        });
      allExercisesData = allExercisesData.concat(response.data) 
    // Transform data here if necessary
    const formattedData = JSON.stringify(allExercisesData, null, 2);
    
    // Save to exercise.json
    await fs.writeFile('./data/exerciseRaw.json', formattedData);
    console.log('Data saved to exerciseRaw.json');
  } catch (error) {
    console.error('Error fetching and writing data:', error);
  }
  }
}
// Run the function
fetchDataAndWriteToFile();
